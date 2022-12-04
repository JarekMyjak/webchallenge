import React from 'react';
import {useUser} from '../../../api/useAuth';
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
} from './userData.styles';
import linkedinIcon from '../../../assets/icons/linkedin.png';
import githubIcon from '../../../assets/icons/github.png';
import twitterIcon from '../../../assets/icons/twitter.png';
import websiteIcon from '../../../assets/icons/website.png';

const UserData: React.FC = () => {
    const user = useUser(state => state.user);

    return (
        <Wrapper>
            <Avatar src={user?.avatar} />
            <UserInfo>
                <NameWrapper>
                    <Username>John Paul</Username>
                    <Nickname>{user?.username}</Nickname>
                </NameWrapper>
                <LinkSection>
                    <Socials>
                        <SocialText>Social profile connection</SocialText>
                        <SocialLinks>
                            <SocialImg src={linkedinIcon} />
                            <SocialImg src={githubIcon} />
                            <SocialImg src={twitterIcon} />
                        </SocialLinks>
                    </Socials>
                    <MyWebiste>
                        <WebsiteText>My Private website</WebsiteText>
                        <WebsiteImg src={websiteIcon} />
                    </MyWebiste>
                </LinkSection>
            </UserInfo>
        </Wrapper>
    );
};

export default UserData;
