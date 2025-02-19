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
    async (config) => config,
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      let errorMessage = "حدث خطأ غير متوقع";

      if (error.response) {
        const responseData = error.response.data;
        if (responseData && Object.keys(responseData).length === 0) {
          errorMessage = "خطأ في الخادم - يرجى المحاولة مرة أخرى";
        } else {
          errorMessage = responseData?.message || "حدث خطأ في الخادم";
          if (Array.isArray(errorMessage)) {
            errorMessage = errorMessage[0];
          }
        }
        console.log("Server Error:", responseData);
        console.log("Status Code:", error.response.status);
      } else if (error.request) {
        errorMessage = "خطأ في الشبكة - يرجى التحقق من اتصالك";
        console.log("Network Error:", error.request);
      } else {
        errorMessage = error.message || "خطأ في إعداد الطلب";
        console.log("Request Error:", error.message);
      }

      error.customMessage = errorMessage;
      return Promise.reject(error);
    }
  );

  return instance;
};

const axiosInstance = createAxiosInstance();

export default axiosInstance;
