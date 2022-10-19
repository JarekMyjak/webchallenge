import React from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import NavigationPanel from './NavigationPanel/NavigationPanel';

const AdminPanel: React.FC = () => {
    return (
        <Container>
            {/* ten lewy panel wywal stąd i daj go adminowi zamiast tego leftbar co ma użytkownik*/}
            <LeftPanel>
                <NavigationPanel></NavigationPanel>
            </LeftPanel>
            <MainSections>
                <Outlet />
            </MainSections>
        </Container>
    );
};
export default AdminPanel;

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
`;

const MainSections = styled.div`
    height: 100%;
    width: calc(100% - 364px);
    background-color: ${colors.backgroundSecondary};
    color: white;
    font-size: 36px;
`;

const LeftPanel = styled.div`
    height: 100%;
    width: 350px;
    background-color: ${colors.navBarBackground};
    padding: 0 0 0 7px;
`;
