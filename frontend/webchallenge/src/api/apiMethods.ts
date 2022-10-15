import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { useUser } from './useAuth';

export const get = (endpoint: string) => {
    const token = useUser().token;
    const config: AxiosRequestConfig = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return axios.get("http://localhost:3030/api/users/me", config)
}