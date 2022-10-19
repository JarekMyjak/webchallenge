import React from 'react';
import styled from 'styled-components';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import LastChallengesSection from './LastChallengesSection/LastChallengesSection';
import OpinionSection from './OpinionSection/OpinionSection';
import SliderSection from './SliderSection/SliderSection';
import TechnologiesSection from './TechnologiesSection/TechnologiesSection';

const Landing: React.FC = () => {
    return (
        <Container>
            <SliderSection />
            <TechnologiesSection />
            <HowItWorksSection />
            <LastChallengesSection />
            <OpinionSection />
        </Container>
    );
};

export default Landing;

const Container = styled.div``;
