import axios from "axios";
import https from "https";
import { cookies } from "next/headers";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    withCredentials: true,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  instance.interceptors.request.use(
    async (config) => {
      const cookieStore = await cookies();
      const token = cookieStore.get("access_token")?.value;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let errorMessage = "An unexpected error occurred";

      if (error.response) {
        console.error("Server Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        errorMessage = error.response.data.message || "Server error occurred";
      } else if (error.request) {
        console.error("Network Error:", error.request);
        errorMessage = "Network error - please check your connection";
      } else {
        console.error("Request Error:", error.message);
        errorMessage = error.message || "Error setting up the request";
      }

      error.customMessage = errorMessage;
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = createAxiosInstance();

export default axiosInstance;
