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
            <Avatar src='./src/assets/images/landing/First_avatar_comment.jpeg' />
            <UserInfo>
                <NameWrapper>
                    <Username>John Paul</Username>
                    <Nickname>@Freaks_US</Nickname>
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
