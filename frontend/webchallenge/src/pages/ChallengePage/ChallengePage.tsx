import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import TopSection from './TopSection';
import {useParams} from 'react-router-dom';
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

const ChallengePage: React.FC = () => {
    const {challengeId} = useParams();
    const [challenge, setChallenge] = useState<Challenge | undefined>();
    const [entries, setEntries] = useState<Entry[]>([]);
    const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);

    const openDialogHandler = () => setAddDialogOpen(true);
    const closeDialogHandler = () => setAddDialogOpen(false);

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
                            title={challenge?.title}
                            id={challenge?.id}
                            onUploadClick={openDialogHandler}
                        />
                    </Wrapper>
                    <Wrapper>
                        Entries:
                        {console.log(entries)}
                        {entries.map(e => (
                            <>
                                <p>{e.githubUrl}</p>
                                <p>{e.description}</p>
                                <p>{e.likes}</p>
                                <p>{e.liked ? 'liked' : 'not liked'}</p>
                                <p>
                                    {e.comments.map(c => (
                                        <p>{c.content}</p>
                                    ))}
                                </p>

                                <button
                                    onClick={() => {
                                        postDislikeToEntry(e.id);
                                    }}
                                >
                                    unstar
                                </button>
                                <button
                                    onClick={() => {
                                        postLikeToEntry(e.id);
                                    }}
                                >
                                    star
                                </button>

                                <button
                                    onClick={() => {
                                        postCommentToEntry(e.id);
                                    }}
                                >
                                    comment
                                </button>
                            </>
                        ))}
                    </Wrapper>
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
