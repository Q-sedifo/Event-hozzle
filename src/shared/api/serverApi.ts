import axios from "axios";
import Cookies from "js-cookie";

const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});

serverApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("_auth_access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export { serverApi };
