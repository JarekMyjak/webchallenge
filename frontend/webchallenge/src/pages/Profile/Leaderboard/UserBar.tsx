import React from 'react';
import styled from 'styled-components';

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

const Wrapper = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    margin: 10px 0;
`;

const Rank = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
`;

const UserImg = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 25px;
    object-fit: cover;
    margin: 0 15px 0 10px;
`;

const User = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 200px;
    height: 50px;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
`;

const Score = styled(Rank)`
    width: 110px;
`;
