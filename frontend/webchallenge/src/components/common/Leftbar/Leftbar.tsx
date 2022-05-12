import React from 'react';
import styled from 'styled-components';

const Leftbar: React.FC = () => {
    return (
        <Container>
            <Test>xD</Test>
        </Container>
    );
};

export default Leftbar;

const Container = styled.div`
    width: 100px;
    height: 100vh;
    background-color: #000000;
    position: sticky;
    align-self: flex-start;
    top: 0;
    padding-top: 56.7px;
`;

const Test = styled.div`
    color: white;
`;
