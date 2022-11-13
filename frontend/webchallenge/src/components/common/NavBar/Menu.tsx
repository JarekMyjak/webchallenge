import React from 'react';
import styled from 'styled-components';
import {useUser} from '../../../api/useAuth';
import colors from '../../../helpers/colors.helpers';
import {Link} from 'react-router-dom';

interface IMenu {
    isOpen: boolean;
}

const Menu: React.FC<IMenu> = props => {
    const user = useUser(state => state.user);

    return (
        <Container isOpen={props.isOpen}>
            <UserName>{user?.name}</UserName>
            {user?.role === 'USER' && (
                <Button to='/adminpanel'>Admin panel</Button>
            )}
            <Button to='/'>Logout</Button>
        </Container>
    );
};

export default Menu;

interface IContainer {
    isOpen: boolean;
}

export const Container = styled.div<IContainer>`
    width: 150px;
    height: 0px;
    background-color: black;
    position: absolute;
    top: 57px;
    border-radius: 0% 0 5px 5px;
    opacity: 0;
    overflow: hidden;
    transition: 0.1s;
    box-shadow: 1px 1px 10px black;
    ${props => props.isOpen && `opacity: 1; height:120px;`};
`;

export const UserName = styled.div`
    height: 40px;
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
`;

export const Button = styled(Link)`
    /* background-color: red; */
    color: white;
    cursor: pointer;
    background-color: transparent;
    height: 40px;
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-left: 2px solid black;
    transition: 0.2s;
    text-decoration: none;
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-left: 2px solid ${colors.orange};
    }
`;
