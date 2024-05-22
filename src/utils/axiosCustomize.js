import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let listErrors = Object.values(error.response.data.errors);

    if (listErrors) {
        listErrors.forEach((error) => {
            toast.error(error[0]);
        })
    } else {
        return Promise.reject(error);
    }
});

export default instance;