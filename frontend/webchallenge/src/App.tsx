import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/common/Footer/Footer';
import Leftbar from './components/common/Leftbar/Leftbar';
import NavBar from './components/common/NavBar/NavBar';
import colors from './helpers/colors.helpers';
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

const App: React.FC = () => {
    const location = useLocation();

    return (
        <Container>
            <NavBar />
            <ContentWrapper>
                {location.pathname !== '/' && <Leftbar />}

                <Content>
                    <Routes>
                        <Route path='/' element={<Landing />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                        <Route path='/settings' element={<Settings />}></Route>
                        <Route
                            path='*'
                            element={<>NOTING HERE ZULUL</>}
                        ></Route>
                    </Routes>
                </Content>
            </ContentWrapper>
            <Footer />
        </Container>
    );
};

export default App;

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    min-height: 100vh;
`;

const ContentWrapper = styled.div`
    display: flex;
    /* min-height: 10000px; */
    /* height: 50px; */
    /* height: 200vh; */
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    /* height: 1000px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
