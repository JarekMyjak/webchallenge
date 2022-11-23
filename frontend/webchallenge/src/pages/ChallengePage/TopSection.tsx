import React from 'react';
import {
    Image,
    Wrapper,
    ImageAndButtons,
    ImageWrapper,
    ButtonsWrapper,
    ButtonView,
    ChallengeData,
    Info,
    TitleBar,
    Title,
    Status,
    Description,
    TechnologiesAndExperience,
    Technologies,
    TechnologiesList,
    Experience,
    StartButton,
} from './topSection.styles';
import fistCardImg from '../../assets/images/landing/First_card.jpg';
import {downloadChallengeUrl} from '../../api/apiChallenges';

export const enum techs {
    html = 'HTML',
    css = 'CSS',
    react = 'REACT',
    js = 'JAVASCRIPT',
    ts = 'TYPESCRIPT',
    api = 'API',
}

interface ITopSection {
    exp?: 'beginner' | 'intermediate' | 'advanced';
    technologies?: techs[];
    premium?: boolean;
    title?: string;
    id: any;
    onUploadClick(): void;
}

const TopSection: React.FC<ITopSection> = props => {
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
            <ImageAndButtons>
                <ImageWrapper>
                    <Image src={fistCardImg} />
                </ImageWrapper>
                <ButtonsWrapper>
                    <ButtonView active={true}>Desktop design</ButtonView>
                    <ButtonView>Mobile design</ButtonView>
                    <ButtonView>Active states</ButtonView>
                </ButtonsWrapper>
            </ImageAndButtons>
            <ChallengeData>
                <Info>
                    <TitleBar>
                        <Title>{props.title}</Title>
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
                        <Experience>
                            <Title>Experience required</Title>
                            <span>{experienceSwitch()}</span>
                        </Experience>
                    </TechnologiesAndExperience>
                </Info>
                <StartButton href={downloadChallengeUrl(props?.id)}>
                    Download
                </StartButton>
                <StartButton onClick={props.onUploadClick}>Upload</StartButton>
            </ChallengeData>
        </Wrapper>
    );
};

export default TopSection;
