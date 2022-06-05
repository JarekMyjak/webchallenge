import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../components/TitleBar';
import colors from '../../helpers/colors.helpers';

const Settings: React.FC = () => {
    return (
        <Container>
            <TitleBar text='Personal' />
        </Container>
    );
};

export default Settings;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    height: 1050px;
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 80px 40px 80px 70px;
`;
