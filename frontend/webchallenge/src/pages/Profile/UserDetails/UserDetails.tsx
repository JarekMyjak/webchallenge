import React from 'react';
import TitleBar from '../../../components/TitleBar';
import AboutUser from './AboutUser';
import ChallengeData from './ChallengeData';
import UserContact from './UserContact';
import UserData from './UserData';
import {Container} from './userDetails.styles';
import detailsIcon from '../../../assets/icons/user_icon.png';

const UserDetails: React.FC = () => {
    return (
        <Container>
            <UserData />
            <TitleBar imageSrc={detailsIcon} text='Profile Details' />
            <AboutUser />
            <UserContact />
            <ChallengeData />
        </Container>
    );
};

export default UserDetails;
