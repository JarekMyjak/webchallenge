import React from 'react';
import {
    Top,
    Status,
    ChallengeImg,
    Bottom,
    Info,
    Technologies,
    TechContainer,
    Experience,
    Wrapper,
    Description,
    Title,
    Text,
} from './challengeCard.styles';

export const enum techs {
    html = 'HTML',
    css = 'CSS',
    sass = 'SASS',
    react = 'REACT',
    js = 'JAVASCRIPT',
    ts = 'TYPESCRIPT',
    api = 'API',
}

interface IChallengeCard {
    exp: 'beginner' | 'intermediate' | 'advanced';
    technologies: string[];
    premium: boolean;
    title: string;
    description: string;
    image: string;
}

const ChallengeCard: React.FC<IChallengeCard> = props => {
    const experienceSwitch = () => {
        switch (props.exp) {
            case 'beginner':
                return <span className={props.exp}>beginner</span>;
            case 'intermediate':
                return <span className={props.exp}>intermediate</span>;
            case 'advanced':
                return <span className={props.exp}>advanced</span>;
            default:
                return <span>unspecified</span>;
        }
    };

    return (
        <Wrapper>
            <Top isPremium={props.premium}>
                <Status isPremium={props.premium}>
                    {props.premium ? 'P' : 'F'}
                </Status>
                <ChallengeImg>
                    <img src={props.image} />
                </ChallengeImg>
            </Top>
            <Bottom>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.description}</Text>
                </Description>
                <Info>
                    <Technologies>
                        <p>technologies</p>
                        <TechContainer>
                            {props.technologies.map(el => (
                                <span key={el} className={el}>
                                    {el}
                                </span>
                            ))}
                        </TechContainer>
                    </Technologies>
                    <Experience>
                        <p>experience required</p>
                        {experienceSwitch()}
                    </Experience>
                </Info>
            </Bottom>
        </Wrapper>
    );
};

export default ChallengeCard;
