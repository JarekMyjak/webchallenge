import React from 'react';
import {
    Wrapper,
    Logo,
    Nav,
    NavButton,
    LoginAndRegister,
    Login,
    LoginLogo,
    LoggedLogo,
    LogoAndLocalization,
    SmallLogoText,
    Localization,
    AnnouncesAndUser,
    TempAnnounce,
    UserAvatar,
} from './navBar.styles';
import {useLocation} from 'react-router-dom';
import github from '../../../assets/icons/github.svg';

const NavBar: React.FC = () => {
    const location = useLocation();
    //TEMP Verbiable
    const logged = true;

    if (logged)
        return (
            <Wrapper>
                <LogoAndLocalization>
                    <LoggedLogo></LoggedLogo>
                    <SmallLogoText>WebChallange</SmallLogoText>
                    &nbsp; &gt; &nbsp;
                    <Localization>
                        {location.pathname.replace('/', '')}
                    </Localization>
                </LogoAndLocalization>
                <Nav>
                    <NavButton>Contact</NavButton>
                    <NavButton>Resources</NavButton>
                    <NavButton>Community</NavButton>
                    <NavButton>Challanges</NavButton>
                    <NavButton>Premium</NavButton>
                    <AnnouncesAndUser>
                        <TempAnnounce src='https://i.imgur.com/JN9OLX6.png' />
                        <UserAvatar src='https://i.ytimg.com/vi/UPfjKirM-wg/maxresdefault.jpg' />
                    </AnnouncesAndUser>
                </Nav>
            </Wrapper>
        );
    else
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
                            <LoginLogo src={github} />
                        </Login>
                    </LoginAndRegister>
                </Nav>
            </Wrapper>
        );
};

export default NavBar;
