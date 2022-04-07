import React from 'react';
import {
    Avatar,
    Sign,
    Technology,
    Wrapper,
    Comment,
    Text,
} from './opinion.styles';

interface IOpinion {
    avatar: string;
    text: string;
    sign: string;
    technologyImg: string;
}

const Opinion: React.FC<IOpinion> = props => {
    return (
        <Wrapper>
            <Avatar src={props.avatar} />
            <Comment>
                <Text>{props.text}</Text>
                <Sign>{props.sign}</Sign>
            </Comment>
            <Technology src={props.technologyImg} />
        </Wrapper>
    );
};

export default Opinion;
