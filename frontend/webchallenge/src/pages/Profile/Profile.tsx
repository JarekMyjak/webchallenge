import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import UserDetails from './UserDetails/UserDetails';

const Profile: React.FC = () => {
    return (
        <Container>
            <UserDetails />
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
`;
