import React from 'react';
import TitleBar from '../../../components/TitleBar';
import {Wrapper, Board, Header, Headers} from './Leaderboard.styles';
import UserBar from './UserBar';

const Leaderboard: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
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
