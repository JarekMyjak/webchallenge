import React from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

import {
    Container,
    Title,
    NavPanel,
    ExpandMenu,
    Icon,
    IconArrow,
    CustomLink,
} from './NavigationPanel.styles';

const NavigationPanel: React.FC = () => {
    return (
        <Container>
            <Title>Welcome to the admin panel</Title>

            <NavPanel>
                <ExpandMenu>Option 1</ExpandMenu>
                <CustomLink to='managechallenges'>
                    <ExpandMenu>
                        <Icon
                            src='../../src/assets/icons/bookmark.png'
                            alt='brak'
                        />
                        Challenges
                        <IconArrow
                            src='../../src/assets/icons/arrow-down.png'
                            alt='brak'
                        />
                        {/* Rozwijane menu tu dodam
                            <AddNewChallenge>Add new challenge</AddNewChallenge>
                            <DeleteChallenge>Delete challenge</DeleteChallenge>
                            */}
                    </ExpandMenu>
                </CustomLink>
                <ExpandMenu>Option 3</ExpandMenu>
                <ExpandMenu>Option 4</ExpandMenu>
            </NavPanel>
        </Container>
    );
};

export default NavigationPanel;
