import {ApiBaseUrl, apiGet} from './apiMethods';
import {redirect} from 'react-router-dom';
import {user} from './useAuth';

export const getUsers = async () => {
    const usersArr = await apiGet('/api/users').then(res => {
        return res.data.users as user[];
    });
    return usersArr;
};

export const getUserById = async (userId: string) => {
    const user = await apiGet(`/api/users/${userId}`).then(res => {
        return res.data.user as user;
    });
    return user;
};
