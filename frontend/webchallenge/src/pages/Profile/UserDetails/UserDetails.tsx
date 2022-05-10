import React from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import AboutUser from './AboutUser';
import ChallangeData from './ChallangeData';
import UserContact from './UserContact';
import UserData from './UserData';

const UserDetails: React.FC = () => {
    return (
        <Container>
            <UserData />
            <ProfileBar>
                <ProfileImg />
                <div>
                    <ProfileTextWrapper>Profile details</ProfileTextWrapper>
                    <Bar />
                </div>
            </ProfileBar>
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
`;

const ProfileBar = styled.div`
    display: flex;
`;

const ProfileImg = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 15px;
`;

const ProfileTextWrapper = styled.div`
    font-size: 17px;
    font-weight: 700;
`;

const Bar = styled.div`
    height: 3px;
    width: 100%;
    background-color: ${colors.orange};
`;
