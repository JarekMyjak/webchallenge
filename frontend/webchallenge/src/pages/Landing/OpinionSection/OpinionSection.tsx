import React from 'react';
import {
    Wrapper,
    Content,
    Title,
    Description,
    Comments,
    Comment,
} from './opinionSection.styles';

const LastCardsSection: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>What other say about us</Title>
                <Description>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type
                </Description>
                <Comments>
                    <Comment />
                    <Comment />
                    <Comment />
                </Comments>
            </Content>
        </Wrapper>
    );
};

export default LastCardsSection;
