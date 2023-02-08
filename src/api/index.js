import axios from "axios"
import env from '../env'

const api = axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return config;
});


export default api