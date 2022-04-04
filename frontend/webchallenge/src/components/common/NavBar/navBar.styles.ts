import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.div`
    background-color: ${colors.navBarBackground};
    width: 100vw;
    height: 57.6px;
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
    font-size: 26px;
    height: 57.6px;
    margin-left: 90px;
    user-select: none;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 57.6px;
    margin-right: 90px;
`;

export const NavButton = styled.button`
    font-size: 14px;
    font-weight: bold;
    padding: 0 35px;
    height: 72px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.1s;
    color: #d0d0d0;
    :hover {
        background-color: ${colors.orange};
    }
`;

export const LoginAndRegister = styled.div`
    height: 57.6px;
    display: flex;
    align-items: center;
    margin-left: 50px;
`;

export const Login = styled.button`
    width: 95px;
    height: 35px;
    background-color: white;
    border: 2px solid ${colors.iris};
    border-radius: 6px;
    font-weight: bold;
    color: ${colors.iris};
    cursor: pointer;
    margin: 0 10px;
    font-size: 13px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s;
    :hover {
        background-color: ${colors.iris};
        color: white;
    }
`;
export const Register = styled(Login)`
    background-color: ${colors.iris};
    color: white;
    :hover {
        background-color: white;
        color: ${colors.iris};
    }
`;
