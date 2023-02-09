import axios from 'axios';
import { getUserLocalStorage } from '../context/AuthProvider/util';

export const API = axios.create({
    baseURL: "https://localhost:7284/",
});

API.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        config.headers.Authorization = `Bearer ${user?.token}`;

        return config;

    },
    (error) => {
        return Promise.reject(error);
    }
)