import React from 'react';
import styled from 'styled-components';
import ChallangesList from './ChallangesList/ChallangesList';
import Tips from './Tips/Tips';

const Challanges: React.FC = () => {
    return (
        <Container>
            <Tips />
            <ChallangesList />
        </Container>
    );
};

export default Challanges;

const Container = styled.div`
    width: 1250px;
    padding: 90px 0;
`;
