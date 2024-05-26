import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, userName, role, image) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', userName);
    formData.append('role', role);
    formData.append('image', image);

    return axios.post('/participant', formData);
}

const getAllUser = () => {
    return axios.get('/participant/all');
}

export { postCreateNewUser, getAllUser };