import axios from "axios";
import { getCookie, removeCookie } from "./cookie/cookies";

const STATUS_401_UNAUTHORIZED = 401;

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie();
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error.response)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === STATUS_401_UNAUTHORIZED) {
      removeCookie();
      window.location.href = "/";
      alert(error.response.data.message);
      // 로그인이 필요합니다.
    }
    return Promise.reject(error);
  }
);
