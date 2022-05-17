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
                <ConctactImg></ConctactImg>
                <ContactText>williamButtler@69.xd</ContactText>
            </Contact>
            <Contact>
                <ConctactImg></ConctactImg>
                <ContactText> NumerDoTwojejStarej </ContactText>
            </Contact>
            <Contact>
                <ConctactImg></ConctactImg>
                <ContactText>New York</ContactText>
            </Contact>
        </Wrapper>
    );
};

export default UserContact;
