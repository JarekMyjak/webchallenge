import React, {useEffect, useState} from 'react';
import TitleBar from '../../../components/TitleBar';
import {Wrapper, Board, Header, Headers} from './Leaderboard.styles';
import UserBar from './UserBar';
import prizeIcon from '../../../assets/icons/prize.png';
import {getLeaderboard, LeaderboardEntry} from '../../../api/apiLeaderboard';
import {Link} from 'react-router-dom';

const Leaderboard: React.FC = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        (async () => {
            setLeaderboard(await getLeaderboard());
        })();
    }, []);

    return (
        <Wrapper>
            <TitleBar imageSrc={prizeIcon} text='Leaderboard' />
            <Board>
                <Headers>
                    <Header width={40}>Rank</Header>
                    <Header width={220}>User</Header>
                    <Header width={70}>Score</Header>
                </Headers>
                {leaderboard.map((entry, idx) => (
                    <>
                        <Link
                            style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                fontSize: '16px',
                                color: '#d3d3d3',
                                textDecoration: 'none',
                            }}
                            onClick={(e: any) => e.stopPropagation()}
                            to={`/profile/${entry.user.id}`}
                        >
                            <UserBar
                                avatarSrc={entry.user.avatar}
                                points={entry.likes}
                                name={entry.user.username}
                                rank={idx + 1}
                            />
                        </Link>
                    </>
                ))}
            </Board>
        </Wrapper>
    );
};

export default Leaderboard;
