import React, { useEffect, useState } from 'react';
import TitleBar from '../../../components/TitleBar';
import ChallangeCard, { techs } from '../../../components/ChallangeCard';
import {
    Container,
    TitleAndOptions,
    Options,
    List,
} from './ChallangesList.styles';
import { Challenge, getChallenges } from '../../../api/apiChallenges';

const ChallangesList: React.FC = () => {

    const [challenges, setChallenges] = useState<Challenge[]>([])

    useEffect(() => {
        (async () => {
            setChallenges(await getChallenges())
        })()
    }, [])

    return (
        <Container>
            <TitleAndOptions>
                <TitleBar
                    imageSrc='./src/assets/icons/bookmark.png'
                    text='All challanges'
                />
                <Options>TODO</Options>
            </TitleAndOptions>
            <List>
                {challenges.map(c =>
                    <ChallangeCard
                        exp='advanced'
                        technologies={[techs.html, techs.css, techs.react]}
                        premium={true}
                        title={c.title}
                        description={c.description}
                        image={c.imageUrls[0]}
                    />
                )}
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
                <ChallangeCard
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                />
            </List>
        </Container>
    );
};

export default ChallangesList;
