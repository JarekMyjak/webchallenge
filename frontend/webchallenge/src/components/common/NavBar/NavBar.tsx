import React from 'react';
import {
    Wrapper,
    Logo,
    Nav,
    NavButton,
    LoginAndRegister,
    Login,
    Register,
} from './navBar.styled';

const NavBar: React.FC = () => {
    return (
        <Wrapper>
            <Logo>WebChallange</Logo>
            <Nav>
                <NavButton>Contact</NavButton>
                <NavButton>Community</NavButton>
                <NavButton>Challanges</NavButton>
                <NavButton>Premium</NavButton>
                <LoginAndRegister>
                    <Login>Log in</Login>
                    <Register>Register</Register>
                </LoginAndRegister>
            </Nav>
        </Wrapper>
    );
};

export default NavBar;
