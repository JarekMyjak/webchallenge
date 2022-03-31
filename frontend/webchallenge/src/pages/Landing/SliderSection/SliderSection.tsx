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

const SliderSection: React.FC = () => {
    return (
        <Wrapper>
            <LeftSide>
                <Content>
                    <TextContent>
                        <Title>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </Title>
                        <DownText>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book
                        </DownText>
                    </TextContent>
                    <CreateAccButton>Create account</CreateAccButton>
                </Content>
            </LeftSide>
            <RightSide>
                <ImageBackground src="./src/graphic/photo/Top_slider_graphic.jpg"></ImageBackground>
            </RightSide>
        </Wrapper>
    );
};

export default SliderSection;
