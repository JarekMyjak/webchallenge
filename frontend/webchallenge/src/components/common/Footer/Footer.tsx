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

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <LeftSide>
                    <AboutUs>
                        <LogoContainer>WebChallange</LogoContainer>
                        <Description>
                            In a standard user experience, it seems like people
                            don’t pay much attention to the elements “below the
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
                            <li>
                                Community
                                <NestedMenuList>
                                    <li>Leaderboard</li>
                                    <li>Solutions</li>
                                </NestedMenuList>
                            </li>
                            <li>Challanges</li>
                            <li>Premium</li>
                        </MenuList>
                    </Menu>
                    <Contact>
                        <Title>Get in touch</Title>
                        <ContactOption>
                            <Icon />
                            748 323 506
                        </ContactOption>
                        <ContactOption>
                            <Icon />
                            web@challange.com
                        </ContactOption>
                        <ContactOption>
                            <Icon />
                            Mrągowska 14/2 31-234, Cracov Poland
                        </ContactOption>
                    </Contact>
                </LeftSide>
                <RightSide>
                    <Newsletter>Newsletter</Newsletter>
                    <MailForm>
                        <MailInput type='mail' />
                        <SignButton>Sign up</SignButton>
                    </MailForm>
                    <Socials>
                        <Social />
                        <Social />
                        <Social />
                        <Social />
                    </Socials>
                </RightSide>
            </Container>
            <FooterEnd>© WEBPROJECT, Inc. 2022. Code with us </FooterEnd>
        </Wrapper>
    );
};

export default Footer;
