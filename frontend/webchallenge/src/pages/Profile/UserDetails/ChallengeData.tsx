import React from 'react';
import {
    Wrapper,
    Progress,
    Counter,
    Bar,
    AllChallenges,
    Completed,
    Text,
} from './challengeData.styles';

const ChallengeData: React.FC = () => {
    return (
        <Wrapper>
            <Progress>
                <Counter>5</Counter>
                <Text>In progress</Text>
            </Progress>
            <Bar />
            <AllChallenges>
                <Counter>10</Counter>
                <Text>Your all challenges</Text>
            </AllChallenges>
            <Bar />
            <Completed>
                <Counter>5</Counter>
                <Text>Completed</Text>
            </Completed>
        </Wrapper>
    );
};

export default ChallengeData;
