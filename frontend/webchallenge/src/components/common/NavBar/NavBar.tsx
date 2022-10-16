import React, { useEffect } from 'react';
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
import { useUser } from '../../../api/useAuth';
import { useGet, usePost } from '../../../api/apiMethods';

// const add = addChallenge();
const NavBar: React.FC = () => {
    const location = useLocation();
    //TEMP Verbiable
    const user = useUser(state => state.user)
    const logged = false;

    const postres = usePost("/api/challenges",{});
        console.log(postres)
    
        const res = useGet("/api/challenges");
        console.log(res)
    // const addChallenge = async () => {
    //     const postres = await usePost("/api/challenges",{});
    //     console.log(postres)
    
    //     const res = await useGet("/api/challenges");
    //     console.log(res)
    // }

    // useEffect(() => {
    //   addChallenge()
    // }, [])
    

    if (user)
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
                    <CustomLink to='/challanges'>
                        <NavButton>Challanges</NavButton>
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
                <Logo>WebChallange</Logo>
                <Nav>
                    <NavButton>Contact</NavButton>
                    <NavButton>Resources</NavButton>
                    <NavButton>Community</NavButton>
                    <NavButton>Challanges</NavButton>
                    <NavButton>Premium</NavButton>
                    <LoginAndRegister>
                        <LoginLink href={"http://localhost:3030/auth/github"}>
                            Login with Github
                            <LoginLogo src={github} />
                        </LoginLink>
                    </LoginAndRegister>
                </Nav>
            </Wrapper>
        );
};

export default NavBar;
