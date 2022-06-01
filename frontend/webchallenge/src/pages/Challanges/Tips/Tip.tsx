import React from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import {Wrapper, BigNumber, TextContent, Title, Text} from './Tip.styles';

interface ITip {
    number: number;
    title: string;
    text: string;
}

const Tip: React.FC<ITip> = props => {
    return (
        <Wrapper number={props.number}>
            <BigNumber>{props.number}</BigNumber>
            <TextContent>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </TextContent>
        </Wrapper>
    );
};

export default Tip;
