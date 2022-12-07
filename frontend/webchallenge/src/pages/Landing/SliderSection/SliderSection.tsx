import React from 'react';
import {
    Wrapper,
    LeftSide,
    Content,
    TextContent,
    Title,
    DownText,
    CreateAccButton,
    RightSide,
    ImageBackground,
} from './sliderSection.styles';
import topSliderGraphic from './../../../assets/images/landing/Top_slider_graphic.jpg';

const SliderSection: React.FC = () => {
    return (
        <Wrapper>
            <LeftSide>
                <Content>
                    <TextContent>
                        <Title>
                            WebChallenge
                        </Title>
                        <DownText>
                            WebChallenge is a repository of front end challenges
                            that will elevate your coding skills.
                            With the help of a comunity of likeminded coders.<br/>
                            Take part in a challenge, submit it and see how others tackled it differently.
                        </DownText>
                    </TextContent>
                    <CreateAccButton>Create account</CreateAccButton>
                </Content>
            </LeftSide>
            <RightSide>
                <ImageBackground src={topSliderGraphic}></ImageBackground>
            </RightSide>
        </Wrapper>
    );
};

export default SliderSection;
