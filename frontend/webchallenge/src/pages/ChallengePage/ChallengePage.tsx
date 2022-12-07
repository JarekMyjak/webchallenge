import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import TopSection from './TopSection';
import {json, useParams} from 'react-router-dom';
import {
    Challenge,
    downloadChallengeUrl,
    getChallenge,
} from '../../api/apiChallenges';
import {
    Entry,
    getEntriesByChallengeId,
    postCommentToEntry,
    postDislikeToEntry,
    postLikeToEntry,
} from '../../api/apiEntries';
import Loader from '../../components/Loader';
import EntryUploadPage from './EntryUploadPage';
import ClickAwayListener from 'react-click-away-listener';
import EntryBox from '../../components/EntryBox';
import TitleBar from '../../components/TitleBar';

const ChallengePage: React.FC = () => {
    const {challengeId} = useParams();
    const [challenge, setChallenge] = useState<Challenge | undefined>();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);

    const openDialogHandler = () => setAddDialogOpen(true);

    const closeDialogHandler = () => {
        setAddDialogOpen(false);
        if (challengeId) {
            (async () => {
                setEntries(await getEntriesByChallengeId(challengeId));
            })();
        }
    };

    useEffect(() => {
        if (challengeId) {
            (async () => {
                setChallenge(await getChallenge(challengeId));
            })();

            (async () => {
                setEntries(await getEntriesByChallengeId(challengeId));
            })();
        }
    }, []);

    return (
        <div
            style={{
                width: 'calc(100% - 57px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {challenge ? (
                <Container>
                    <Wrapper>
                        <TopSection
                            image={challenge.imageUrls[0]}
                            title={challenge?.title}
                            id={challenge?.id}
                            onUploadClick={openDialogHandler}
                            description={challenge.description}
                            details={challenge.details}
                            technologies={JSON.parse(challenge.tech).map(
                                (el: any) => el.value
                            )}
                            exp={challenge.experience.toLowerCase()}
                        />
                    </Wrapper>
                    {entries?.length > 0 && (
                        <Wrapper>
                            <Title>
                                <TitleBar text='Users entries:' />
                            </Title>
                            {entries.map(e => (
                                <EntryBox
                                    challengeId={challenge.id}
                                    description={e.description}
                                    ownerId={e.userId}
                                    likes={e.likes}
                                    liked={e.liked}
                                    githubUrl={e.githubUrl}
                                    entryId={e.id}
                                    commentsCount={e.comments.length}
                                />
                            ))}
                        </Wrapper>
                    )}
                    {addDialogOpen && challenge && (
                        <Dialog>
                            <EntryUploadPage
                                challenge={challenge}
                                closeDialogHandler={closeDialogHandler}
                            />
                        </Dialog>
                    )}
                </Container>
            ) : (
                <WrapperLoader>
                    <Loader />
                </WrapperLoader>
            )}
        </div>
    );
};

export default ChallengePage;

const Container = styled.div`
    position: relative;
`;

const Dialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    background-color: ${colors.backgroundPrimary + 'AD'};
    display: flex;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 1250px;
    min-height: 500px;
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 45px 60px;
    margin: 2rem 0;
    border-radius: 3px;
    box-shadow: 1px 1px 7px black;
`;

const WrapperLoader = styled.div`
    width: 1250px;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    color: white;
    margin-bottom: 10px;
`;
