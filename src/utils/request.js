import axios from 'axios';

const request = axios.create({
    baseURL: `https://tiktok.fullstack.edu.vn/api/`,
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;

const BASE_URL = 'https://jorkan-backend.vercel.app/api/';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
