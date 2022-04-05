import React from 'react';
import {
    DownText,
    Icon,
    Icons,
    Title,
    Wrapper,
    TextContent,
} from './technologiesSection.styles';

import reactIcon from '../../../assets/icons/react.svg';
import sassIcon from '../../../assets/icons/sass.svg';
import tsIcon from '../../../assets/icons/typescript-96.svg';
import jsIcon from '../../../assets/icons/javascript-96.svg';
import htmlIcon from '../../../assets/icons/html5.svg';
import cssIcon from '../../../assets/icons/css3.svg';

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
                <Icon src={htmlIcon} />
                <Icon src={jsIcon} />
                <Icon src={sassIcon} />
                <Icon src={cssIcon} />
                <Icon src={tsIcon} />
                <Icon src={reactIcon} />
            </Icons>
        </Wrapper>
    );
};

export default TechnologiesSection;
