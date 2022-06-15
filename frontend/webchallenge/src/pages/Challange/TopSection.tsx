import React from 'react';
import {
    Image,
    Wrapper,
    ImageAndButtons,
    ImageWrapper,
    ButtonsWrapper,
    ButtonView,
    ChallangeData,
    Info,
    TitleBar,
    Title,
    Status,
    Description,
    TechnologiesAndExperience,
    Technologies,
    TechnologiesList,
    Expirience,
    StartButton,
} from './TopSection.styles';

export const enum techs {
    html = 'HTML',
    css = 'CSS',
    react = 'REACT',
    js = 'JAVASCRIPT',
    ts = 'TYPESCRIPT',
    api = 'API',
}

interface ITopSection {
    exp?: 'begginer' | 'intermediate' | 'advanced';
    technologies?: techs[];
    premium?: boolean;
}

const TopSection: React.FC<ITopSection> = props => {
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
            <ImageAndButtons>
                <ImageWrapper>
                    <Image src='./src/assets/images/landing/First_card.jpg' />
                </ImageWrapper>
                <ButtonsWrapper>
                    <ButtonView active={true}>Desktop design</ButtonView>
                    <ButtonView>Mobile design</ButtonView>
                    <ButtonView>Active states</ButtonView>
                </ButtonsWrapper>
            </ImageAndButtons>
            <ChallangeData>
                <Info>
                    <TitleBar>
                        <Title>WeatherApp</Title>
                        <Status isPremium={true}>{true ? 'P' : 'F'}</Status>
                    </TitleBar>
                    <Description>
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                    </Description>
                    <TechnologiesAndExperience>
                        <Technologies>
                            <Title>Technologies</Title>
                            <TechnologiesList>
                                {/* CHECK CHALLANGECARD IN FUTURE  */}
                                <span className={techs.api}>{techs.api}</span>
                                <span className={techs.html}>{techs.html}</span>
                                <span className={techs.css}>{techs.css}</span>
                                <span className={techs.ts}>{techs.ts}</span>
                                <span className={techs.react}>
                                    {techs.react}
                                </span>
                            </TechnologiesList>
                        </Technologies>
                        <Expirience>
                            <Title>Expirience required</Title>
                            <span>{experienceSwitch()}</span>
                        </Expirience>
                    </TechnologiesAndExperience>
                </Info>
                <StartButton>Active challange</StartButton>
            </ChallangeData>
        </Wrapper>
    );
};

export default TopSection;
