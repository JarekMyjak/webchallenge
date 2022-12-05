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
    SocialButton,
} from './userData.styles';
import linkedinIcon from '../../../assets/icons/linkedin.png';
import githubIcon from '../../../assets/icons/github.png';
import twitterIcon from '../../../assets/icons/twitter.png';
import websiteIcon from '../../../assets/icons/website.png';

const UserData: React.FC = () => {
    const user = useUser(state => state.user);
    console.log(user);
    const openSocial = (url: any) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Wrapper>
            <Avatar src={user?.avatar} />
            <UserInfo>
                <NameWrapper>
                    <Username>@{user?.githubName}</Username>
                    <Nickname>@{user?.username}</Nickname>
                </NameWrapper>
                <LinkSection>
                    <Socials>
                        <SocialText>Social profile connection</SocialText>
                        <SocialLinks>
                            {user?.linkedIn !== '' && (
                                <SocialButton
                                    onClick={() => openSocial(user?.linkedIn)}
                                >
                                    <SocialImg src={linkedinIcon} />
                                </SocialButton>
                            )}
                            {user?.github !== '' && (
                                <SocialButton
                                    onClick={() => openSocial(user?.github)}
                                >
                                    <SocialImg src={githubIcon} />
                                </SocialButton>
                            )}
                        </SocialLinks>
                    </Socials>
                    {user?.website !== '' && (
                        <MyWebiste>
                            <WebsiteText>My Private website</WebsiteText>
                            <SocialButton
                                onClick={() => openSocial(user?.website)}
                            >
                                <SocialImg src={websiteIcon} />
                            </SocialButton>
                        </MyWebiste>
                    )}
                </LinkSection>
            </UserInfo>
        </Wrapper>
    );
};

export default UserData;
