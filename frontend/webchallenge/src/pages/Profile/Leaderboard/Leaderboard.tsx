import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';

const Leaderboard: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
                text='Leaderboard'
            />
        </Wrapper>
    );
};

export default Leaderboard;

const Wrapper = styled.div`
    width: 400px;
    height: 375px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 25px 35px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
