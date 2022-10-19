import React from 'react';

import {
    AboutUs,
    Contact,
    ContactOption,
    Container,
    Description,
    FooterEnd,
    Icon,
    LeftSide,
    LogoContainer,
    MailForm,
    MailInput,
    Menu,
    MenuList,
    NestedMenuList,
    Newsletter,
    RightSide,
    SignButton,
    Social,
    Socials,
    Title,
    Wrapper,
} from './Footer.styles';

import phone from '../../../assets/icons/phone.png';
import mail from '../../../assets/icons/mail.png';
import pin from '../../../assets/icons/pin.png';
import linkedin from '../../../assets/icons/linkedin.png';
import github from '../../../assets/icons/github.png';
import fb from '../../../assets/icons/fb.png';
import twitter from '../../../assets/icons/twitter.png';

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <LeftSide>
                    <AboutUs>
                        <LogoContainer>WebChallenge</LogoContainer>
                        <Description>
                            In a standard user experience, it seems like people
                            don't pay much attention to the elements “below the
                            fold”, everything happens at the top of the website,
                            fortunately, users have learned to look for Footers,
                            and their use has become a well known and
                            established Design Pattern. Footers are there to
                            help us to find infly.
                        </Description>
                    </AboutUs>
                    <Menu>
                        <Title>Menu</Title>
                        <MenuList>
                            <li>Contact</li>
                            <li>Resources</li>
                            <li>
                                Community
                                <NestedMenuList>
                                    <li>Leaderboard</li>
                                    <li>Solutions</li>
                                </NestedMenuList>
                            </li>
                            <li>Challenges</li>
                            <li>Premium</li>
                        </MenuList>
                    </Menu>
                    <Contact>
                        <Title>Get in touch</Title>
                        <ContactOption>
                            <Icon src={phone}/>
                            748 323 506
                        </ContactOption>
                        <ContactOption>
                            <Icon src={mail}/>
                            web@challenge.com
                        </ContactOption>
                        <ContactOption>
                            <Icon src={pin}/>
                            Mrągowska 14/2 31-234, Cracov Poland
                        </ContactOption>
                    </Contact>
                </LeftSide>
                <RightSide>
                    <Newsletter>
                        <Title>Newsletter</Title>
                        <MailForm>
                            <MailInput type='mail' placeholder='Your mail...'/>
                            <SignButton>Sign up</SignButton>
                        </MailForm>
                        <Socials>
                            <Social src={linkedin}/>
                            <Social src={github}/>                   
                            <Social src={fb}/>
                            <Social src={twitter}/>
                        </Socials>
                    </Newsletter>
                </RightSide>
            </Container>
            <FooterEnd>© WEBCHALLENGE, Inc. 2022. Code with us </FooterEnd>
        </Wrapper>
    );
};

export default Footer;
