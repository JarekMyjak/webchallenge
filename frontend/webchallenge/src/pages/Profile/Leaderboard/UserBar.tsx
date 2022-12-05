import React from 'react';
import {Wrapper, Rank, User, UserImg, Score} from './UserBar.styles';

interface IUserBar {
    avatarSrc: string;
    name: string;
    points: number;
    rank: number;
}
const nth = (n: number) => {return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}

const UserBar: React.FC<IUserBar> = props => {
    return (
        <Wrapper>
            <Rank>{props.rank}{nth(props.rank)}</Rank>
            <User>
                <UserImg src={props.avatarSrc} />
                {props.name}
            </User>
            <Score>{props.points}</Score>
        </Wrapper>
    );
};

export default UserBar;
