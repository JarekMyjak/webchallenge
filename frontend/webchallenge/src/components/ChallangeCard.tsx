import React from 'react';
import {
    Top,
    Status,
    ChallangeImg,
    Bottom,
    Info,
    Technologies,
    TechContainer,
    Experience,
    Wrapper,
    Description,
    Title,
    Text,
} from './challangeCard.styles';

export const enum techs {
    html = 'HTML',
    css = 'CSS',
    react = 'REACT',
    js = 'JAVASCRIPT',
    ts = 'TYPESCRIPT',
    api = 'API',
}

interface IChallangeCard {
    exp: 'begginer' | 'intermediate' | 'advanced';
    technologies: techs[];
    premium: boolean;
    title: string;
    description: string;
    image: string;
}

const ChallangeCard: React.FC<IChallangeCard> = props => {
    const experienceSwitch = () => {
        switch (props.exp) {
            case 'begginer':
                return <span className={props.exp}>begginer</span>;
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
                <ChallangeImg>
                    <img src={props.image} />
                </ChallangeImg>
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
                                <span key={el} className={el}>{el}</span>
                            ))}
                        </TechContainer>
                    </Technologies>
                    <Experience>
                        <p>expirience required</p>
                        {experienceSwitch()}
                    </Experience>
                </Info>
            </Bottom>
        </Wrapper>
    );
};

export default ChallangeCard;
