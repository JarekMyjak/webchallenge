import React from 'react';

import {
    Wrapper,
    Content,
    Title,
    ProgressContainer,
    ProgressText,
    ProgressBar,
    CurrentBar,
    ImageContainer,
    Description,
    Text,
    Image,
} from './howItWorksSection.styles';

const HowItWorksSection: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>How it works</Title>
                <ProgressContainer>
                    <ProgressText>
                        <Text isActive={true}>Choose your challenge</Text>
                        <Text>Code the design</Text>
                        <Text>Submit your solution</Text>
                        <Text>Give feedback</Text>
                    </ProgressText>
                    <ProgressBar>
                        <CurrentBar />
                    </ProgressBar>
                </ProgressContainer>
                <ImageContainer>
                    <Image src='https://i.imgur.com/2T0Q7xr.png' />
                </ImageContainer>
                <Description>
                    Have a look through our collection of web designs. Pick one
                    that you feel will be a nice challenge for you at this stage
                </Description>
            </Content>
        </Wrapper>
    );
};

export default HowItWorksSection;
