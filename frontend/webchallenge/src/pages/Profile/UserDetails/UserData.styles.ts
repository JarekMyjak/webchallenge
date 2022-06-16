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

export const SocialLinks = styled.div``;

export const SocialText = styled.span`
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const SocialImg = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 12px;
`;

export const MyWebiste = styled(Socials)`
    margin-left: 60px;
`;

export const WebsiteText = styled(SocialText)``;

export const WebsiteImg = styled(SocialImg)``;
