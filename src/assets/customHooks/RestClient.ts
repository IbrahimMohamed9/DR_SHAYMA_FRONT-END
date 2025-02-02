import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const restClientAxios: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

restClientAxios.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

restClientAxios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Unauthorized access - Redirect to login.");
          break;
        case 500:
          console.error("Server error:", error.response);
          break;
        default:
          console.error("API Error:", error.response);
      }
    } else if (error.request) {
      console.error("No response from server:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

const RestClient = async (
  url: string,
  method: string = "GET",
  params?: any
) => {
  try {
    let response: AxiosResponse;

    switch (method) {
      case "POST":
        response = await restClientAxios.post(url, params);
        break;
      case "PUT":
        response = await restClientAxios.put(url, params);
        break;
      case "DELETE":
        response = await restClientAxios.delete(url);
        break;
      default:
        response = await restClientAxios.get(url, { params });
    }

    return { data: response.data, error: null, loading: false };
  } catch (error) {
    return { data: null, error, loading: false };
  }
};

interface Setters {
  setLoading?: (loading: boolean) => void;
  setError?: (error: any) => void;
  setData?: (data: any) => void;
}

const fetchData = async (endpoint: string, setters: Setters = {}) => {
  const { setLoading, setError, setData } = setters;

  try {
    const { data } = await RestClient(endpoint);
    setData && setData(data);
    setLoading && setLoading(false);
  } catch (err) {
    setError && setError(err);
    setLoading && setLoading(false);
  }
};

export { RestClient, fetchData };
