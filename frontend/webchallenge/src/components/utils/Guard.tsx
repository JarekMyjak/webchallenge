import React, {FC} from 'react';
import {useUser} from '../../api/useAuth';
import {Navigate, useLocation} from 'react-router-dom';

const Guard: FC = props => {
    const location = useLocation();
    const user = useUser(state => state.user);

    if (user === undefined && location.pathname !== '/') {
        return <Navigate to='/' />;
    }

    if (location.pathname === '/' && user !== undefined) {
        console.log(user, location.pathname);
        return <Navigate to='/challenges' />;
    }

    if (user.role !== 'ADMIN' && location.pathname.includes('admin')) {
        return <Navigate to='/challenges' />;
    }

    return <>{props.children}</>;
};

export default Guard;
