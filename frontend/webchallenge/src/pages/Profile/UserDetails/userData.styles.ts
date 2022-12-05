import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 30px 0 50px 0;
    display: flex;
`;

export const Avatar = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 40px;
    object-fit: cover;
    box-shadow: 1px 1px 10px black;
`;

export const UserInfo = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 60px;
`;

export const Username = styled.span`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
`;

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nickname = styled.span`
    font-size: 13px;
    font-weight: 400;
`;

export const LinkSection = styled.div`
    display: flex;
`;

export const Socials = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 5px;
`;

export const SocialText = styled.span`
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const SocialButton = styled.button`
    width: 35px;
    height: 35px;
    border: none;
    background-color: transparent;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    }
`;
export const SocialImg = styled.img`
    width: 35px;
    height: 35px;
`;

export const MyWebiste = styled(Socials)`
    margin-left: 60px;
`;

export const WebsiteText = styled(SocialText)``;

export const WebsiteImg = styled(SocialImg)``;
