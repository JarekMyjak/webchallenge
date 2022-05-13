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

import github from '../../../assets/icons/github.svg';

const NavBar: React.FC = () => {
    return (
        <Wrapper>
            <Logo>WebChallange</Logo>
            <Nav>
                <NavButton>Contact</NavButton>
                <NavButton>Resources</NavButton>
                <NavButton>Community</NavButton>
                <NavButton>Challanges</NavButton>
                <NavButton>Premium</NavButton>
                <LoginAndRegister>
                    <Login>
                        Login with Github
                        {/* TEMP SRC */}
                        <LoginLogo src={github} />
                    </Login>
                </LoginAndRegister>
            </Nav>
        </Wrapper>
    );
};

export default NavBar;
