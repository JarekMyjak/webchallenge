import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import Activities from './Activities/Activities';
import Challenges from './Challenges/Challenges';
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
            <Challenges />
            <Activities />
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 0;
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
