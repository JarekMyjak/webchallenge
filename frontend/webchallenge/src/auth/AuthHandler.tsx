import React, { useEffect } from 'react';
import {Navigate, redirect, useParams, useSearchParams} from 'react-router-dom';
import { useUser } from './useAuth';

const AuthHandler = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const jwt = searchParams.get("jwt");
    console.log(searchParams.get("jwt"))
    // useUser.getState().setUser(jwt)
    const setUser = useUser().setUser;
    setUser(jwt);

    // redirect("/");
    return (<Navigate replace to="/" />)
}

export default AuthHandler