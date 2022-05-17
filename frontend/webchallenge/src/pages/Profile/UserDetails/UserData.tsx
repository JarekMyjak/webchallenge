import React from 'react';
import {
    Wrapper,
    Avatar,
    UserInfo,
    NameWrapper,
    Username,
    Nickname,
    LinkSection,
    Socials,
    SocialText,
    SocialLinks,
    SocialImg,
    MyWebiste,
    WebsiteText,
    WebsiteImg,
} from './UserData.styles';

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
