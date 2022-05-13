import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.footer``;

export const Container = styled.div`
    border-top: 1px solid ${colors.backgroundSecondary};
    padding: 50px 100px 50px 50px;
    color: white;
    display: flex;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    font-size: 22px;
    width: 300px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 400;
`;

export const AboutUs = styled.div`
    width: 300px;
`;
export const Description = styled.span`
    display: inline-block;
    width: 300px;
    color: #c4c4c4;
    font-size: 16px;
    font-weight: 400;
`;

export const FooterEnd = styled.div`
    height: 40px;
    background-color: ${colors.backgroundSecondary};
    text-align: center;
    font-size: 14px;
    line-height: 40px;
    font-weight: 500;
    color: white;
`;

export const Menu = styled.div`
    width: 100px;
    font-size: 16px;
    font-weight: 600;
`;

export const Title = styled.div`
    width: 55px;
    border-bottom: 3px solid ${colors.orange};
    font-weight: 600;
    padding-bottom: 10px;
    text-transform: uppercase;
`;

export const MenuList = styled.ul`
    list-style-type: none;
    padding-left: 0;
    li {
        padding: 5px 0;
    }
`;

export const NestedMenuList = styled(MenuList)`
    padding-left: 25px;
    li {
        text-decoration: initial !important;
        font-weight: 400;
    }
`;

export const Contact = styled.div`
    width: 200px;
    
    ${Title} {
        width: 115px;
    }
`;

export const Icon = styled.img`
    min-width: 25px;
    max-width: 25px;
    height: 25px;
    margin-right: 20px;
`;

export const ContactOption = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin: 13px 0;
    width: 180px;
    display: flex;
    padding-top: 10px;
`;

export const LeftSide = styled.div`
    display: flex;
    justify-content: space-around;
    width: 1000px;
`;

export const RightSide = styled.div``;

export const Newsletter = styled.div`
    
    ${Title} {
        width: 105px;
        
    }
`;

export const MailForm = styled.form`
    margin-top: 30px;
    display: flex;
    align-items: center;
`;

export const MailInput = styled.input`
    box-sizing: border-box;
    height: 36px;
    width: 240px;
    outline: none;
    padding: 0 20px;
    font-size: 16px;
    margin-right: 10px;
    border: none;
`;

export const SignButton = styled.button`
    box-sizing: border-box;
    height: 36px;
    width: 100px;
    background-color: ${colors.iris};
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    font-size: 16px;
    margin: 0;
    cursor: pointer;
`;

export const Socials = styled.div`
    display: flex;
`;

export const Social = styled.img`
    width: 30px;
    height: 30px;
    margin: 20px 20px 0 0;
`;
