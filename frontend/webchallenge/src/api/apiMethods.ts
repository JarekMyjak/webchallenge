import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { useUser } from './useAuth';

export const useGet = (endpoint: string) => {
    const token = useUser.getState().token;
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get(`http://localhost:3030${endpoint}`, config)
}

export const usePost = (endpoint: string, payload: any) => {
    const token = useUser.getState().token;

    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.post(`http://localhost:3030${endpoint}`,{}, config)
}


