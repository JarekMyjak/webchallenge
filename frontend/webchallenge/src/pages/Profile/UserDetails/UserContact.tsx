import React from 'react';
import {
    Wrapper,
    Title,
    Contact,
    ConctactImg,
    ContactText,
} from './UserContact.styles';

const UserContact: React.FC = () => {
    return (
        <Wrapper>
            <Title>Contact</Title>
            <Contact>
                <ConctactImg src='./src/assets/icons/mail.png'></ConctactImg>
                <ContactText>johnpaul@gmail.com</ContactText>
            </Contact>
            <Contact>
                <ConctactImg src='./src/assets/icons/phone.png'></ConctactImg>
                <ContactText> 989 588 763 </ContactText>
            </Contact>
            <Contact>
                <ConctactImg src='./src/assets/icons/pin.png'></ConctactImg>
                <ContactText>New York</ContactText>
            </Contact>
        </Wrapper>
    );
};

export default UserContact;
