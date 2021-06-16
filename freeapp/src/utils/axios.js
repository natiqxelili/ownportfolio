import axios from "axios";

const currAdminPanel = '';

const request = axios.create({
    baseURL: process.env.REACT_APP_BACKEND,
    headers: {
        'Authorization': `Bearer ${localStorage.token}`
    }
});

request.interceptors.request.use(
    request => {
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request;
