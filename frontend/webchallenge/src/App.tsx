import React from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import AuthHandler from './api/AuthHandler';
import Footer from './components/common/Footer/Footer';
import Leftbar from './components/common/Leftbar/Leftbar';
import NavBar from './components/common/NavBar/NavBar';
import colors from './helpers/colors.helpers';
import Landing from './pages/Landing/Landing';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import AddChallenges from './pages/AdminPanel/ManageChallenges/AddChallenges';
import Challenges from './pages/Challenges/Challenges';
import Premium from './pages/Premium/Premium';
import ListOfChallenges from './pages/AdminPanel/ManageChallenges/ListOfChallenges';
import EditChallenge from './pages/AdminPanel/ManageChallenges/EditChallenge';
import ChallengePage from './pages/ChallengePage/ChallengePage';
import ChallengeUpload from './pages/ChallengePage/EntryUploadPage';
import Guard from './components/utils/Guard';

const App: React.FC = () => {
    const location = useLocation();
    // const set = useUser(store => store.setUser)

    return (
        <Container>
            <NavBar />
            <ContentWrapper>
                {![
                    '/',
                    '/adminpanel',
                    '/adminpanel/addchallenges',
                    '/adminpanel/listofchallenges',
                    '/adminpanel/editchallenge',
                ].includes(location.pathname) && <Leftbar />}

                <Content>
                    <Routes>
                        <Route path='/' element={<Landing />} />
                        <Route path='/authhandler' element={<AuthHandler />} />
                        <Route
                            path='adminpanel'
                            element={
                                <Guard>
                                    <AdminPanel />
                                </Guard>
                            }
                        >
                            <Route
                                path='addchallenges'
                                element={
                                    <Guard>
                                        <AddChallenges />
                                    </Guard>
                                }
                            />
                            <Route
                                path='listofchallenges'
                                element={
                                    <Guard>
                                        <ListOfChallenges />
                                    </Guard>
                                }
                            />
                            <Route //TODO
                                path='editchallenge'
                                element={
                                    <Guard>
                                        <EditChallenge />
                                    </Guard>
                                }
                            />
                        </Route>
                        <Route
                            path='/profile'
                            element={
                                <Guard>
                                    <Profile />
                                </Guard>
                            }
                        />
                        <Route
                            path='/settings'
                            element={
                                <Guard>
                                    <Settings />
                                </Guard>
                            }
                        />
                        <Route
                            path='/premium'
                            element={
                                <Guard>
                                    <Premium />
                                </Guard>
                            }
                        />
                        {/* <Route
                            path='/challenge'
                            element={<Challenge />}
                        ></Route> */}
                        <Route
                            path='/challenges'
                            element={
                                <Guard>
                                    <Challenges />
                                </Guard>
                            }
                        />
                        <Route
                            path='/challenges/:challengeId'
                            element={
                                <Guard>
                                    <ChallengePage />
                                </Guard>
                            }
                        />
                        <Route
                            path='/challenges/:challengeId/upload'
                            element={
                                <Guard>
                                    <ChallengeUpload />
                                </Guard>
                            }
                        />
                        <Route path='*' element={<Navigate to='/' />} />
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
    /* justify-content: center; */
`;
