import React, {useEffect, useState} from 'react';
import TitleBar from '../../../components/TitleBar';
import ChallengeCard, {techs} from '../../../components/ChallengeCard';
import {
    Container,
    TitleAndOptions,
    Options,
    List,
} from './ChallengesList.styles';
import {Challenge, downloadChallengeUrl, getChallenges} from '../../../api/apiChallenges';
import { Link } from 'react-router-dom';

const ChallengesList: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([]);

    useEffect(() => {
        (async () => {
            setChallenges(await getChallenges());
        })();
    }, []);

    return (
        <Container>
            <TitleAndOptions>
                <TitleBar
                    imageSrc='./src/assets/icons/bookmark.png'
                    text='All challenges'
                />
                {/* <Options>TODO</Options> */}
            </TitleAndOptions>
            <List>
                {challenges.map(c => (
                    <React.Fragment key={`fragment${c.id}`}>
                        <ChallengeCard
                            key={`challengeCard${c.id}`}
                            exp={c.experience}
                            technologies={[techs.html, techs.css, techs.react]}
                            premium={true}
                            title={c.title}
                            description={c.description}
                            image={c.imageUrls[0]}
                        />
                        <Link to={c.id}>page</Link>
                        <a href={downloadChallengeUrl(c.id)}>download</a>
                    </React.Fragment>
                ))}
                {/* <ChallengeCard
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
                    exp='advanced'
                    technologies={[techs.html, techs.css, techs.react]}
                    premium={true}
                    title='Advice generator app'
                    description='There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised'
                    image='./src/assets/images/landing/First_card.jpg'
                /> */}
            </List>
        </Container>
    );
};

export default ChallengesList;
