import axios from 'axios';

// const requestGetUser = axios.create({
//     baseURL: `https://jorkan-backend.vercel.app/`,
// });

// export const get = async (path, option = {}) => {
//     const response = await requestGetUser.get(path, option);
//     return response.data;
// };

// export default requestGetUser;

const BASE_URL = 'https://jorkan-backend.vercel.app/api/';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
