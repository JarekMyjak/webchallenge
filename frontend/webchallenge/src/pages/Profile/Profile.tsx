import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import Premium from './Premium/Premium';
import UserDetails from './UserDetails/UserDetails';

const Profile: React.FC = () => {
    return (
        <Container>
            <UserDetails />
            <RightPanels>
                <Premium />
            </RightPanels>
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    display: flex;
`;

const RightPanels = styled.div`
    margin-left: 50px;
`;
