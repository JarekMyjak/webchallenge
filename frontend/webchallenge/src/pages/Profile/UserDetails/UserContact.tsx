import React from 'react';
import {useUser} from '../../../api/useAuth';
import {
    Wrapper,
    Title,
    Contact,
    ConctactImg,
    ContactText,
} from './userContact.styles';
import mailIcon from '../../../assets/icons/mail.png';
import pinIcon from '../../../assets/icons/pin.png';
import {user} from '../../../api/useAuth';
interface IUserContact {
    user: user;
}

const UserContact: React.FC<IUserContact> = props => {
    const user = props.user;

    return (
        <Wrapper>
            <Title>Contact</Title>
            <Contact>
                <ConctactImg src={mailIcon}></ConctactImg>
                <ContactText>
                    {user?.email === '' ? 'Unknown' : user?.email}
                </ContactText>
            </Contact>

            <Contact>
                <ConctactImg src={pinIcon}></ConctactImg>
                <ContactText>
                    {user?.city === '' ? 'Valhalla (Unknown)' : user?.city}
                </ContactText>
            </Contact>
        </Wrapper>
    );
};

export default UserContact;
