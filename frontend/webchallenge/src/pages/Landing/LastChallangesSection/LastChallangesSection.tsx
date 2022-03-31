import React from 'react';
import {
    Wrapper,
    Content,
    Title,
    Description,
    Cards,
    Card,
    MoreChallanges,
    Bar,
} from './lastChallangesSection.styles';

const LastCardsSection: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>Latest added challanges</Title>
                <Description>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the
                </Description>
                <Cards>
                    <Card />
                    <Card />
                    <Card />
                </Cards>
                <MoreChallanges>
                    View more challanges
                    <Bar />
                </MoreChallanges>
            </Content>
        </Wrapper>
    );
};

export default LastCardsSection;
