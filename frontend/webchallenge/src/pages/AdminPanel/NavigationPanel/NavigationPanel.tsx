import React from 'react';
import ExpandMenu from './ExpandMenu';
import bookmark from '../../../assets/icons/bookmark.png';
import {Container, Title, NavPanel} from './navigationPanel.styles';

export interface IMenuOptions {
    title: string;
    linkTo: string;
}

const ChallangesMenuOptions: IMenuOptions[] = [
    {
        title: 'Add Challenge',
        linkTo: 'addchallenges',
    },
];

const NavigationPanel: React.FC = () => {
    console.log(bookmark);
    return (
        <Container>
            <Title>Welcome to the admin panel</Title>

            <NavPanel>
                <ExpandMenu
                    title='Challenges'
                    icon={bookmark}
                    menuOptions={ChallangesMenuOptions}
                ></ExpandMenu>
            </NavPanel>
        </Container>
    );
};

export default NavigationPanel;
