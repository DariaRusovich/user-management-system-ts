import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants/urls';
import { RefreshTokensResponseData } from '../types/auth';

export const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return [null, response.data];
  },
  async (error) => {
    if (error.response.status === 401 && error.config.url !== 'refresh-token') {
      const [userError, user] = await api.get<
        never,
        RefreshTokensResponseData[]
      >('refresh-token', {
        withCredentials: true,
      });
      if (user) {
        const { accessToken } = user.userData.tokens;
        localStorage.setItem('token', accessToken);
        return await api.request(error.config);
      } else {
        return [userError, null];
      }
    }
    return [error, null];
  }
);
