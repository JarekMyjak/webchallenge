import React from 'react';
import {
    Wrapper,
    Title,
    Contact,
    ConctactImg,
    ContactText,
} from './userContact.styles';
import mailIcon from '../../../assets/icons/mail.png';
import phoneIcon from '../../../assets/icons/phone.png';
import pinIcon from '../../../assets/icons/pin.png';
import {useUser} from '../../../api/useAuth';

const UserContact: React.FC = () => {
    const user = useUser(store => store.setUser);

    return (
        <Wrapper>
            <Title>Contact</Title>
            <Contact>
                <ConctactImg src={mailIcon}></ConctactImg>
                <ContactText></ContactText>
            </Contact>
            <Contact>
                <ConctactImg src={phoneIcon}></ConctactImg>
                <ContactText> 989 588 763 </ContactText>
            </Contact>
            <Contact>
                <ConctactImg src={pinIcon}></ConctactImg>
                <ContactText>New York</ContactText>
            </Contact>
        </Wrapper>
    );
};

export default UserContact;
