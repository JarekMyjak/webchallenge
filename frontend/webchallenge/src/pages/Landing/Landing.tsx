import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import SliderSection from './SliderSection/SliderSection';
import TechnologiesSection from './TechnologiesSection/TechnologiesSection';

const Landing: React.FC = () => {
    return (
        <Container>
            <SliderSection />
            <TechnologiesSection />
        </Container>
    );
};

export default Landing;

const Container = styled.div``;
