import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { useUser } from './useAuth';

export const ApiBaseUrl = import.meta.env.VITE_API_BASE_URL;
console.log(import.meta.env)
export const apiGet = (endpoint: string) => {
    const token = useUser.getState().token;
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(`${ApiBaseUrl}${endpoint}`, config)
}

export const apiPost = (endpoint: string, payload: any) => {
    const token = useUser.getState().token;
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.post(`${ApiBaseUrl}${endpoint}`, payload, config)
}

export const apiPostFile = (endpoint: string, payload: any) => {
    const token = useUser.getState().token;
    const config: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
    }
}
return axios.post(`${ApiBaseUrl}${endpoint}`, payload, config)
}


