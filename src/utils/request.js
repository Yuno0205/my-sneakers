import axios from 'axios';

const BASE_URL = 'https://jorrkan-api.onrender.com/api/';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = (token) =>
    axios.create({
        baseURL: BASE_URL,
        headers: { token: `Bearer ${token}` },
    });
