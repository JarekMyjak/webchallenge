import React from 'react';
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
                Jakieś dane startowe dla admina
            </MainSections>
        </Container>
    );
};
export default AdminPanel;

const Container = styled.div`
    background-color: ${colors.backgroundPrimary};
    min-height: 100vh;
    width: 1300px;
    display: flex;
    flex-direction: row;
`;

const MainSections = styled.div`
    height: 750px;
    width: 930px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    font-size: 36px;
`;

const LeftPanel = styled.div`
    height: 750px;
    width: 350px;
    background-color: ${colors.navBarBackground};
    margin-right: 20px;
`;

