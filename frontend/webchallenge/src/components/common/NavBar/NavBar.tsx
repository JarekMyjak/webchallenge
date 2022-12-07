import React, {useEffect, useState} from 'react';
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
import Menu from './Menu';
import ClickAwayListener from 'react-click-away-listener';

// const add = addChallenge();
const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const location = useLocation();
    const user = useUser(state => state.user);

    const closeMenuHandler = () => {
        setMenuOpen(false);
    };

    console.log(user);
    if (user)
        return (
            <Wrapper>
                <LogoAndLocalization>
                    <LoggedLogo
                        isAdminPanel={location.pathname.includes('adminpanel')}
                    ></LoggedLogo>
                    <SmallLogoText>WebChallenge</SmallLogoText>
                </LogoAndLocalization>
                <Nav>
                    {/* <NavButton>Contact</NavButton> */}
                    {/* <NavButton>Resources</NavButton> */}
                    <CustomLink to='/community'>
                        <NavButton>Community</NavButton>
                    </CustomLink>
                    <CustomLink to='/challenges'>
                        <NavButton>Challenges</NavButton>
                    </CustomLink>
                    {/* <NavButton>Premium</NavButton> */}
                    <ClickAwayListener onClickAway={closeMenuHandler}>
                        <AnnouncesAndUser>
                            <UserAvatar
                                src={user.avatar}
                                onClick={() => setMenuOpen(p => !p)}
                            />
                            <Menu isOpen={menuOpen} />
                        </AnnouncesAndUser>
                    </ClickAwayListener>
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
