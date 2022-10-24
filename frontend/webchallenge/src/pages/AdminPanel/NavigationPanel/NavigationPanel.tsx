import React from 'react';
import ExpandMenu from './ExpandMenu';
import bookmark from '../../../assets/icons/bookmark.png';
import usericon from '../../../assets/icons/user_icon.png';
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
    {
        title: 'List of Challenges',
        linkTo: 'listofchallenges',
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
                <ExpandMenu
                    title='Users'
                    icon={usericon}
                    menuOptions={ChallangesMenuOptions}
                ></ExpandMenu>
            </NavPanel>
        </Container>
    );
};

export default NavigationPanel;
