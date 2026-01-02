import axios, { type AxiosInstance } from 'axios';
import { API } from './api.constants';

const api: AxiosInstance = axios.create({
    baseURL: `${API.BASE_URL}${API.VERSION}`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true,
});

// REQUEST: Attach access token
// api.interceptors.request.use(async (config) => {
//     const { access_token } = "";

//     if (access_token) {
//         config.headers.Authorization = `Bearer ${access_token}`;
//     }

//     return config;
// });

// // RESPONSE: Handle 401 & refresh token
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config;

//         if (error.response?.status === 401 && !originalRequest?._retry) {
//             originalRequest._retry = true;

//             try {
//                 const newAccessToken = await refreshAccessToken();

//                 if (newAccessToken) {
//                     originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//                     return api(originalRequest);
//                 }
//             } catch {
//                 throw new ApiError('Session expired. Please login again.', 401);
//             }
//         }

//         return Promise.reject(error);
//     }
// );

export default api;
