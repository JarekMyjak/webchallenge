import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';
import UserBar from './UserBar';

const Leaderboard: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
                text='Leaderboard'
            />
            <Board>
                <Headers>
                    <Header width={40}>Rank</Header>
                    <Header width={200}>User</Header>
                    <Header width={110}>Score</Header>
                </Headers>
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={2137}
                    name='Matthew Makula'
                />
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={2137}
                    name='Matthew Makula'
                />
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={2137}
                    name='Matthew Makula'
                />
            </Board>
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
`;

const Board = styled.div`
    box-sizing: border-box;
    width: 350px;
    height: 200px;
`;

const Headers = styled.div`
    display: flex;
    margin: 20px 0;
`;

interface IHeader {
    width: number;
}
const Header = styled.div<IHeader>`
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    ${props => `
    width:${props.width}px;
    `}
`;
