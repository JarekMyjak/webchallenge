import React from 'react';
import {
    Wrapper,
    Progress,
    Counter,
    Bar,
    AllChallanges,
    Completed,
    Text,
} from './ChallangeData.styles';

const ChallangeData: React.FC = () => {
    return (
        <Wrapper>
            <Progress>
                <Counter>5</Counter>
                <Text>In progress</Text>
            </Progress>
            <Bar />
            <AllChallanges>
                <Counter>10</Counter>
                <Text>Your all challenges</Text>
            </AllChallanges>
            <Bar />
            <Completed>
                <Counter>5</Counter>
                <Text>Completed</Text>
            </Completed>
        </Wrapper>
    );
};

export default ChallangeData;
