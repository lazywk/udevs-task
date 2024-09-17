import axios from "axios";

const baseURL = import.meta.env.MODE === 'development' ? import.meta.env.VITE_TESTAPI_BASE_URL : import.meta.env.VITE_API_BASE_URL

const http = axios.create({
    baseURL
})

http.interceptors.request.use(
    (config) => {
        const storedToken = localStorage.getItem('token')

        if (storedToken) {
            config.headers['Authorization'] = `Bearer ${storedToken}`
        }

        return config
    },
    (error) => Promise.reject(error)
)

http.interceptors.response.use(
    (response) => response,
    (error) => {

        return Promise.reject(error);
    }
);

const httpBaseQuery = () => async ({ url, method, data, params }: any) => {
    try {
        const result = await http({ url, method, data, params });
        return { data: result.data };
    } catch (axiosError) {
        return {
            error: {
                status: axiosError.response?.status,
                data: axiosError.response?.data || axiosError.message,
            },
        };
    }
};

export const api = http

export default httpBaseQuery
