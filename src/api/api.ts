import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function checkHealth()  {
  try {
    const res = await api.get("/api/health");
    if (res.status != 200) {
      throw new Error("connection failed")
    }
  } catch (error) {
    throw error
  }
}