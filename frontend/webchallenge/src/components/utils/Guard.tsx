import React from 'react';
import {useUser} from '../../api/useAuth';
import {Navigate, useLocation} from 'react-router-dom';

interface IGuard {
    children: React.ReactNode;
}

const Guard: React.FC<IGuard> = props => {
    const location = useLocation();
    const user = useUser(state => state.user);

    if (location.pathname !== '/' && user === undefined) {
        return <Navigate to='/' />;
    }

    return <>{props.children}</>;
};

export default Guard;
