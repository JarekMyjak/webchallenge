import React, { useEffect } from 'react';
import {Navigate, redirect, useParams, useSearchParams} from 'react-router-dom';
import { apiGet } from './apiMethods';
import { useUser } from './useAuth';

const AuthHandler = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");
    const setToken = useUser().setToken;
    const setUser = useUser().setUser;
    if (jwt) {
        setToken(jwt);
        apiGet('/api/users/me').then((response)=>{
            setUser(response.data);
        })
    }

    // redirect("/");
    return (<Navigate replace to="/" />)
}

export default AuthHandler