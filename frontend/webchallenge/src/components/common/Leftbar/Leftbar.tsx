import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import BarLinks from './BarLinks';

const Leftbar: React.FC = () => {
    return (
        <Container>
            <BarLinks />
        </Container>
    );
};

export default Leftbar;

const Container = styled.div`
    min-width: 70px;
    width: 70px;
    max-width: 70px;
    height: 100vh;
    background-color: #000000;
    position: sticky;
    align-self: flex-start;
    top: 0;
    padding-top: calc(57px + 60px); //57 - topbar height
`;
