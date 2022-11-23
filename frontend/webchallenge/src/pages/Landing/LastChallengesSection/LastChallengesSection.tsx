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
import firstCardImg from '../../../assets/images/landing/First_card.jpg';
import secondCardImg from '../../../assets/images/landing/Second_card.jpg';
import thirdCardImg from '../../../assets/images/landing/Third_card.jpg';

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
                        image={firstCardImg}
                    />
                    <ChallengeCard
                        exp='beginner'
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
                        image={secondCardImg}
                    />
                    <ChallengeCard
                        exp='intermediate'
                        technologies={[techs.html, techs.css, techs.ts]}
                        premium={true}
                        title='Weather App'
                        description='If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isnt anything embarrassing 
                        hidden in the middle of text.'
                        image={thirdCardImg}
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
