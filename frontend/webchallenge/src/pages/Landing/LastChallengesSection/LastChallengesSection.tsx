import React from 'react';
import ChallengeCard, {techs} from '../../../components/ChallengeCard';
import {
    Wrapper,
    Content,
    Title,
    Description,
    Cards,
    MoreChallenges,
    Bar,
} from './lastChallengesSection.styles';

const LastCardsSection: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Title>Latest added challenges</Title>
                <Description>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the
                </Description>
                <Cards>
                    <ChallengeCard
                        exp='advanced'
                        technologies={[techs.html, techs.css, techs.react]}
                        premium={true}
                        title='Advice generator app'
                        description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                        image='./src/assets/images/landing/First_card.jpg'
                    />
                    <ChallengeCard
                        exp='begginer'
                        technologies={[
                            techs.html,
                            techs.css,
                            techs.api,
                            techs.js,
                        ]}
                        premium={false}
                        title='Weather App'
                        description='If you are going to use a passage of Lorem Ipsum,
                         you need to be sure there isnt anything embarrassing 
                         hidden in the middle of text.'
                        image='./src/assets/images/landing/Second_card.jpg'
                    />
                    <ChallengeCard
                        exp='intermediate'
                        technologies={[techs.html, techs.css, techs.ts]}
                        premium={true}
                        title='Weather App'
                        description='If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnt anything embarrassing 
                        hidden in the middle of text.'
                        image='./src/assets/images/landing/Third_card.jpg'
                    />
                </Cards>
                <MoreChallenges>
                    View more challenges
                    <Bar />
                </MoreChallenges>
            </Content>
        </Wrapper>
    );
};

export default LastCardsSection;
