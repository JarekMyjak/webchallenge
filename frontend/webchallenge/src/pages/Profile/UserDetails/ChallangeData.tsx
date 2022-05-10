import React from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

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

const Wrapper = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

const Counter = styled.span`
    font-size: 36px;
    font-weight: 700;
    width: 100%;
`;

const Text = styled.span`
    font-size: 12px;
    font-weight: 700;
`;

const Progress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 50px;
    ${Text} {
        color: #f24e1e;
    }
    ${Counter} {
        text-align: right;
    }
`;

const AllChallanges = styled(Progress)`
    ${Text} {
        color: ${colors.orange};
    }
    ${Counter} {
        text-align: center;
    }
`;
const Completed = styled(Progress)`
    ${Text} {
        color: #0acf83;
    }
    ${Counter} {
        text-align: left;
    }
`;

const Bar = styled.div`
    height: 70px;
    width: 1px;
    background-color: white;
`;
