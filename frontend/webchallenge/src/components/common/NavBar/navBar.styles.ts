import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    background-color: ${colors.navBarBackground};
    width: 100vw;
    height: 57px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: white;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 9999;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    height: 57px;
    margin-left: 100px;
    user-select: none;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 57px;
    margin-right: 90px;
`;

export const NavButton = styled.a`
    font-size: 14px;
    font-weight: bold;
    padding: 0 35px;
    height: 57px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.1s;
    color: #d0d0d0;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${colors.orange};
        color: ${colors.navBarBackground};
    }
`;

export const LoginAndRegister = styled.div`
    height: 57px;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

export const LoginLink = styled("a")`
    width: 180px;
    height: 36px;
    border: 2px solid ${colors.iris};
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    font-size: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s;
    background-color: ${colors.iris};
    color: white;
    text-decoration: none;
    &:hover, &:focus, &:focus-visible {
        background-color: ${colors.irisDark};
    }
`;

export const LoginLogo = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 8px;
`;

/// LOGGED

export const LoggedLogo = styled.div`
    width: 70px;
    height: 57px;
    background-color: ${colors.orange};
    margin-right: 30px;
`;

export const LogoAndLocalization = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SmallLogoText = styled.span`
    font-size: 15px;
    font-weight: 700;
`;

export const Localization = styled.span`
    text-transform: capitalize;
    font-size: 14px;
`;

export const AnnouncesAndUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TempAnnounce = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin: 0 20px;
`;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    background-color: ${colors.backgroundSecondary};
    border-radius: 5px;
    object-fit: cover;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
`;
