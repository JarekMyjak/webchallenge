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

const ChallengePage: React.FC = () => {
    const {challengeId} = useParams();
    const [challenge, setChallenge] = useState<Challenge | undefined>();

    useEffect(() => {
        if (challengeId) {
            (async () => {
                setChallenge(await getChallenge(challengeId));
            })();
        }
    }, []);

    return (
        <Wrapper>
            {challenge && (
                <>
                    TBA:
                    <a href={downloadChallengeUrl(challenge?.id)}>download</a>
                </>
            )}
            {/* <>{challengeId}</> */}
            <TopSection title={challenge?.title} />
        </Wrapper>
    );
};

export default ChallengePage;

const Wrapper = styled.div`
    width: 1250px;
    min-height: 500px;
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 45px 60px;
`;
