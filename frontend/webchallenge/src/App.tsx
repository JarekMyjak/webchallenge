import React from 'react';
import styled from 'styled-components';
import NavBar from './components/common/NavBar/NavBar';
import colors from './helpers/colors.helpers';

const App: React.FC = () => {
    return (
        <Container>
            <NavBar></NavBar>
        </Container>
    );
};

export default App;

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    min-height: 100vh;
`;
