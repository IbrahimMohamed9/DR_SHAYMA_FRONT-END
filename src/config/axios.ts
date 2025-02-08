import axios from "axios";
import https from "https";

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
      let token;
      if (typeof document === "undefined") {
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        token = cookieStore.get("access_token")?.value;
      } else {
        const { useCookies } = await import("next-client-cookies");
        const cookies = useCookies();
        token = cookies.get("access_token");
      }
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
