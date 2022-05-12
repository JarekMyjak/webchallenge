import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import Activities from './Activities/Activities';
import Challanges from './Challanges/Challanges';
import Leaderboard from './Leaderboard/Leaderboard';
import Premium from './Premium/Premium';
import UserDetails from './UserDetails/UserDetails';

const Profile: React.FC = () => {
    return (
        <Container>
            <FirstSection>
                <UserDetails />
                <RightPanels>
                    <Premium />
                    <Leaderboard />
                </RightPanels>
            </FirstSection>
            <Challanges />
            <Activities />
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const FirstSection = styled.div`
    display: flex;
    height: 750px;
    width: 1250px;
`;

const RightPanels = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 750px;
`;
