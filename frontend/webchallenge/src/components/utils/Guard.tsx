import React, { FC } from 'react';
import {useUser} from '../../api/useAuth';
import {Navigate, useLocation} from 'react-router-dom';


const Guard: FC = props => {
    const location = useLocation();
    const user = useUser(state => state.user);

    if (user === undefined) {
        return <Navigate to='/' />;
    }

    return <>{props.children}</>;
};

export default Guard;
