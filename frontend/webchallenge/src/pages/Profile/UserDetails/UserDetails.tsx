import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';
import AboutUser from './AboutUser';
import ChallangeData from './ChallangeData';
import UserContact from './UserContact';
import UserData from './UserData';

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

const Container = styled.div`
    width: 800px;
    height: 750px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;
