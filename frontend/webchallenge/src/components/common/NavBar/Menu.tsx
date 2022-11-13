import React from 'react';
import {useUser} from '../../../api/useAuth';
import {Container, UserName, Button} from './menu.styles';

interface IMenu {
    isOpen: boolean;
}

const Menu: React.FC<IMenu> = props => {
    const user = useUser(state => state.user);
    const logout = useUser().logout;

    return (
        <Container isOpen={props.isOpen}>
            <Button to='/profile'>{user?.name}</Button>
            {user?.role === 'ADMIN' && (
                <Button to='/adminpanel'>Admin panel</Button>
            )}
            <Button to='/' onClick={() => logout()}>
                Logout
            </Button>
        </Container>
    );
};

export default Menu;
