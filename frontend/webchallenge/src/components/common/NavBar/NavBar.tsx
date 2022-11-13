import React, {useEffect} from 'react';
import {
    Wrapper,
    Logo,
    Nav,
    NavButton,
    LoginAndRegister,
    LoginLogo,
    LoggedLogo,
    LogoAndLocalization,
    SmallLogoText,
    Localization,
    AnnouncesAndUser,
    TempAnnounce,
    UserAvatar,
    CustomLink,
    LoginLink,
} from './navBar.styles';
import {useLocation} from 'react-router-dom';
import github from '../../../assets/icons/github.svg';
import {useUser} from '../../../api/useAuth';
import {authUrl} from '../../../api/AuthHandler';

// const add = addChallenge();
const NavBar: React.FC = () => {
    const location = useLocation();
    //TEMP Verbiable
    const user = useUser(state => state.user);
    const logged = false;

    if (user)
        return (
            <Wrapper>
                <LogoAndLocalization>
                    <LoggedLogo
                        isAdminPanel={location.pathname.includes('adminpanel')}
                    ></LoggedLogo>
                    <SmallLogoText>WebChallenge</SmallLogoText>
                    {/* &nbsp; &gt; &nbsp;
                    <Localization>
                        {location.pathname.replace('/', '')}
                    </Localization> */}
                </LogoAndLocalization>
                <Nav>
                    <NavButton>Contact</NavButton>
                    <NavButton>Resources</NavButton>
                    <NavButton>Community</NavButton>
                    <CustomLink to='/challenges'>
                        <NavButton>Challenges</NavButton>
                    </CustomLink>
                    <NavButton>Premium</NavButton>
                    {/* <NavButton onClick={() => login()}>test</NavButton> */}
                    <AnnouncesAndUser>
                        {user.name}
                        <TempAnnounce src='https://i.imgur.com/JN9OLX6.png' />
                        <UserAvatar src={user.avatar} />
                    </AnnouncesAndUser>
                </Nav>
            </Wrapper>
        );
    else
        return (
            <Wrapper>
                <Logo>WebChallenge</Logo>
                <Nav>
                    <NavButton>Contact</NavButton>
                    <NavButton>Resources</NavButton>
                    <NavButton>Community</NavButton>
                    <NavButton>Challenges</NavButton>
                    <NavButton>Premium</NavButton>
                    <LoginAndRegister>
                        <LoginLink href={authUrl}>
                            Login with Github
                            <LoginLogo src={github} />
                        </LoginLink>
                    </LoginAndRegister>
                </Nav>
            </Wrapper>
        );
};

export default NavBar;
