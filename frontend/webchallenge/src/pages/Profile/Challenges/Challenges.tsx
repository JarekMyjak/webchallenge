import React from 'react';
import TitleBar from '../../../components/TitleBar';
//TEMP
import ChallengeCard, {techs} from '../../../components/ChallengeCard';
import {
    ChallengeList,
    Filter,
    Filters,
    TopBar,
    Wrapper,
} from './Challenges.styles';
import firstCard from '../../../assets/images/landing/First_card.jpg';

const Challenges: React.FC = () => {
    return (
        <Wrapper>
            <TopBar>
                <TitleBar
                    imageSrc='./src/assets/icons/bookmark.png'
                    text='Your challenges'
                />
                <Filters>
                    <Filter>Sort By</Filter>
                    <Filter>Filter By</Filter>
                </Filters>
            </TopBar>
            <ChallengeList>
                <ChallengeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image={firstCard}
                />
                <ChallengeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in
                    some form, by injected humour, or randomised'
                    image={firstCard}
                />
                <ChallengeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised'
                    image={firstCard}
                />
                <ChallengeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in
            some form, by injected humour, or randomised'
                    image={firstCard}
                />
                <ChallengeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in
        some form, by injected humour, or randomised'
                    image={firstCard}
                />
                <ChallengeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
    available, but the majority have suffered alteration in
    some form, by injected humour, or randomised'
                    image={firstCard}
                />
                {/* TEMP */}
            </ChallengeList>
        </Wrapper>
    );
};

export default Challenges;
