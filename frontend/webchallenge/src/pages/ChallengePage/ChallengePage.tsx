import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import TopSection from './TopSection';
import {useParams} from 'react-router-dom';
import {Challenge, downloadChallengeUrl, getChallenge} from '../../api/apiChallenges';

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
            {challenge && <>
            <p>{challenge?.title}</p>
			<a href={downloadChallengeUrl(challenge?.id)}>download</a>
            </>}
            {/* <>{challengeId}</> */}
            <TopSection />
        </Wrapper>
    );
};

export default ChallengePage;

const Wrapper = styled.div`
    width: 1250px;
    height: 500px;
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 45px 60px;
`;
