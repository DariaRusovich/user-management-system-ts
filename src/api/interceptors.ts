import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { BASE_URL } from '../constants/urls';

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  withCredentials: true,
});

api.interceptors.request.use((config: AxiosRequestConfig)  => {
    (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

