import React from 'react';
import TitleBar from '../../../components/TitleBar';
import AboutUser from './AboutUser';
import ChallengeData from './ChallengeData';
import UserContact from './UserContact';
import UserData from './UserData';
import {Container} from './UserDetails.styles';

const UserDetails: React.FC = () => {
    return (
        <Container>
            <UserData />
            <TitleBar
                imageSrc='./src/assets/icons/user_icon.png'
                text='Profile Details'
            />
            <AboutUser />
            <UserContact />
            <ChallengeData />
        </Container>
    );
};

export default UserDetails;
