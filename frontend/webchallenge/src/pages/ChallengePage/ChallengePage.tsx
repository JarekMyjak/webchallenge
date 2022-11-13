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

const ChallengePage: React.FC = () => {
    const {challengeId} = useParams();
    const [challenge, setChallenge] = useState<Challenge | undefined>();
    const [entries, setEntries] = useState<Entry[]>([]);

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
        <>
            <Wrapper>
                {challenge && (
                    <>
                        TBA:
                        <a href={downloadChallengeUrl(challenge?.id)}>
                            download
                        </a>
                        <br />
                        <a href={`${challengeId}/upload`}>upload your entry</a>
                    </>
                )}
                {/* <>{challengeId}</> */}
                <TopSection title={challenge?.title} />
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
                        <p>{e.comments.map((c) => <p>{c.content}</p>)}</p>


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
        </>
    );
};

export default ChallengePage;

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