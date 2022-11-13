import React, { useEffect } from 'react';
import {Navigate, redirect, useParams, useSearchParams} from 'react-router-dom';
import { ApiBaseUrl, apiGet } from './apiMethods';
import { useUser } from './useAuth';


export const authUrl = `${ApiBaseUrl}/auth/github`

const AuthHandler = () => {
    let [searchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");
    const setToken = useUser().setToken;
    const setUser = useUser().setUser;
    if (jwt) {
        setToken(jwt);
        apiGet('/api/users/me').then((response)=>{
            setUser(response.data);
        })
    }

    return (<Navigate replace to="/" />)
}

export default AuthHandler