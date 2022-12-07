import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import Activities from './Activities/Activities';
import Challenges from './Challenges/Challenges';
import Leaderboard from './Leaderboard/Leaderboard';
import Premium from './Premium/Premium';
import UserDetails from './UserDetails/UserDetails';
import {useUser} from '../../api/useAuth';

const Profile: React.FC = () => {
    const user = useUser(state => state.user);
    return (
        <Container>
            {user && (
                <>
                    <FirstSection>
                        <UserDetails user={user} />
                        <RightPanels>
                            <Leaderboard />
                            <Premium />
                        </RightPanels>
                    </FirstSection>
                    <Challenges user={user} />
                    {/* <Activities /> */}
                </>
            )}
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    min-height: 95vh;
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
    justify-content: flex-start;
    height: 750px;
    gap: 20px;
`;
