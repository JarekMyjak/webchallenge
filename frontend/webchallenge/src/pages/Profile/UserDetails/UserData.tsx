import React from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

const UserData: React.FC = () => {
    return (
        <Wrapper>
            <Avatar src='https://www.captechu.edu/sites/default/files/William-Butler-500.jpg' />
            <UserInfo>
                <NameWrapper>
                    <Username>Student Piwo</Username>
                    <Nickname>@HarnasEnjoyer69_pl</Nickname>
                </NameWrapper>
                <LinkSection>
                    <Socials>
                        <SocialText>Social profile connection</SocialText>
                        <SocialLinks>
                            <SocialImg src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' />
                            <SocialImg src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' />
                            <SocialImg src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' />
                        </SocialLinks>
                    </Socials>
                    <MyWebiste>
                        <WebsiteText>My Private website</WebsiteText>
                        <WebsiteImg src='https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png' />
                    </MyWebiste>
                </LinkSection>
            </UserInfo>
        </Wrapper>
    );
};

export default UserData;

const Wrapper = styled.div`
    padding: 30px 0 50px 0;
    display: flex;
`;

const Avatar = styled.img`
    width: 150px;
    height: 170px;
    border-radius: 40px;
    object-fit: cover;
`;

const UserInfo = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 60px;
`;

const Username = styled.span`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Nickname = styled.span`
    font-size: 13px;
    font-weight: 400;
`;

const LinkSection = styled.div`
    display: flex;
`;

const Socials = styled.div`
    display: flex;
    flex-direction: column;
`;

const SocialLinks = styled.div``;

const SocialText = styled.span`
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const SocialImg = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 15px;
`;

const MyWebiste = styled(Socials)`
    margin-left: 60px;
`;

const WebsiteText = styled(SocialText)``;

const WebsiteImg = styled(SocialImg)``;
