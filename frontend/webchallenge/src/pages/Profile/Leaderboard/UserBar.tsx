import React from 'react';
import {Wrapper} from './Leaderboard.styles';
import {Rank, User, UserImg, Score} from './UserBar.styles';

interface IUserBar {
    avatarSrc: string;
    name: string;
    points: number;
}

const UserBar: React.FC<IUserBar> = props => {
    return (
        <Wrapper>
            <Rank>1st</Rank>
            <User>
                <UserImg src={props.avatarSrc} />
                {props.name}
            </User>
            <Score>{props.points} Points</Score>
        </Wrapper>
    );
};

export default UserBar;
