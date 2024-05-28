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

const postUpdateUser = (id, userName, role, image) => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('username', userName);
    formData.append('role', role);
    formData.append('image', image);

    return axios.post('/participant/update', formData);
}

const postDeleteUser = (id) => {
    const formData = new FormData();
    formData.append('id', id);

    return axios.post('/participant/delete', formData);
}


export { postCreateNewUser, getAllUser, postUpdateUser, postDeleteUser };