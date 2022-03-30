import React from 'react';
import {
    DownText,
    Icon,
    Icons,
    Title,
    Wrapper,
    TextContent,
} from './technologiesSection.styles';

const TechnologiesSection: React.FC = () => {
    return (
        <Wrapper>
            <TextContent>
                <Title>Technologies we use for challenges</Title>
                <DownText>
                    When solving quests, you will come across different
                    technologies that you need to solve them
                </DownText>
            </TextContent>
            <Icons>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
                <Icon />
            </Icons>
        </Wrapper>
    );
};

export default TechnologiesSection;
