import React from 'react';
import {
    Wrapper,
    Logo,
    Nav,
    NavButton,
    LoginAndRegister,
    Login,
    LoginLogo,
} from './navBar.styles';

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
                    <Login>
                        Login with Github
                        {/* TEMP SRC */}
                        <LoginLogo src='https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                    </Login>
                </LoginAndRegister>
            </Nav>
        </Wrapper>
    );
};

export default NavBar;
