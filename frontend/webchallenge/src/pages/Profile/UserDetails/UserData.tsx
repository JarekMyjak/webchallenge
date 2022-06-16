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
                            <SocialImg src='./src/assets/icons/linkedin.png' />
                            <SocialImg src='./src/assets/icons/github.png' />
                            <SocialImg src='./src/assets/icons/twitter.png' />
                        </SocialLinks>
                    </Socials>
                    <MyWebiste>
                        <WebsiteText>My Private website</WebsiteText>
                        <WebsiteImg src='./src/assets/icons/website.png' />
                    </MyWebiste>
                </LinkSection>
            </UserInfo>
        </Wrapper>
    );
};

export default UserData;
