import React from 'react';
import TitleBar from '../../../components/TitleBar';
import AboutUser from './AboutUser';
import ChallangeData from './ChallangeData';
import UserContact from './UserContact';
import UserData from './UserData';
import {Container} from './UserDetails.styles';

const UserDetails: React.FC = () => {
    return (
        <Container>
            <UserData />
            <TitleBar
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
                text='Profile Details'
            />
            <AboutUser />
            <UserContact />
            <ChallangeData />
        </Container>
    );
};

export default UserDetails;
