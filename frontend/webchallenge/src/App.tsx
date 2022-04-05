import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/common/Footer/Footer';
import NavBar from './components/common/NavBar/NavBar';
import colors from './helpers/colors.helpers';
import Landing from './pages/Landing/Landing';

const App: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Routes>
                <Route path='/' element={<Landing />}></Route>
            </Routes>
            <Footer />
        </Container>
    );
};

export default App;

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    min-height: 100vh;
`;
