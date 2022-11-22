import React, {useEffect, useState} from 'react';
import TitleBar from '../../../components/TitleBar';
import ChallengeCard, {techs} from '../../../components/ChallengeCard';
import {
    Container,
    TitleAndOptions,
    Options,
    CustomLink,
    List,
    LoaderList,
} from './challengesList.styles';
import {
    Challenge,
    downloadChallengeUrl,
    getChallenges,
} from '../../../api/apiChallenges';
import bookmarkIcon from '../../../assets/icons/bookmark.png';
import Loader from '../../../components/Loader';

const ChallengesList: React.FC = () => {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [loading, setLoader] = useState<boolean>(true);
    useEffect(() => {
        (async () => {
            setChallenges(await getChallenges());
            setLoader(false);
        })();
    }, []);

    return (
        <Container>
            <TitleAndOptions>
                <TitleBar imageSrc={bookmarkIcon} text='All challenges' />
                {/* <Options>TODO</Options> */}
            </TitleAndOptions>
            {!loading && (
                <List>
                    {challenges.map(c => (
                        <React.Fragment key={`fragment${c.id}`}>
                            <CustomLink to={c.id}>
                                <ChallengeCard
                                    key={`challengeCard${c.id}`}
                                    exp={c.experience}
                                    technologies={[
                                        techs.html,
                                        techs.css,
                                        techs.react,
                                    ]}
                                    premium={true}
                                    title={c.title}
                                    description={c.description}
                                    image={c.imageUrls[0]}
                                />
                            </CustomLink>
                        </React.Fragment>
                    ))}
                </List>
            )}
            {loading && (
                <LoaderList>
                    <Loader />
                </LoaderList>
            )}
        </Container>
    );
};

export default ChallengesList;
