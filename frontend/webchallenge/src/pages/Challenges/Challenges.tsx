import React from 'react';
import styled from 'styled-components';
import ChallengesList from './ChallengesList/ChallengesList';
import Tips from './Tips/Tips';

const Challenges: React.FC = () => {
    return (
        <Container>
            <Tips />
            <ChallengesList />
        </Container>
    );
};

export default Challenges;

const Container = styled.div`
    width: 1250px;
    padding: 10px 0;

    /* border: 1px solid red; */
`;
