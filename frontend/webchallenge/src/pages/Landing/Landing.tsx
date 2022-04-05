import React from 'react';
import styled from 'styled-components';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import LastChallangesSection from './LastChallangesSection/LastChallangesSection';
import OpinionSection from './OpinionSection/OpinionSection';
import SliderSection from './SliderSection/SliderSection';
import TechnologiesSection from './TechnologiesSection/TechnologiesSection';

const Landing: React.FC = () => {
    return (
        <Container>
            <SliderSection />
            <TechnologiesSection />
            <HowItWorksSection />
            <LastChallangesSection />
            <OpinionSection />
        </Container>
    );
};

export default Landing;

const Container = styled.div``;
