import React from 'react';
import TitleBar from '../../../components/TitleBar';
import {Wrapper, Board, Header, Headers} from './Leaderboard.styles';
import UserBar from './UserBar';

const Leaderboard: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar
                imageSrc='./src/assets/icons/prize.png'
                text='Leaderboard'
            />
            <Board>
                <Headers>
                    <Header width={40}>Rank</Header>
                    <Header width={220}>User</Header>
                    <Header width={70}>Score</Header>
                </Headers>
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={21}
                    name='Matthew Makula'
                />
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={20}
                    name='Matthew Makula'
                />
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={19}
                    name='You'
                />
                <UserBar
                    avatarSrc='https://www.wykop.pl/cdn/c3201142/comment_3q2kbaZ0x9Sf0ctp0I01euXDRRiCCGTd.jpg'
                    points={7}
                    name='Matthew Makula'
                />
            </Board>
        </Wrapper>
    );
};

export default Leaderboard;
