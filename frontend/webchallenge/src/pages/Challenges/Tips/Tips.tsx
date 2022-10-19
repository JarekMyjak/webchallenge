import React from 'react';
import styled from 'styled-components';
import Tip from './Tip';

const sampleText =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ';

const Tips: React.FC = () => {
    return (
        <Wrapper>
            <Tip number={1} title={'Choose a challenge'} text={sampleText} />
            <Tip number={2} title={'Code the design'} text={sampleText} />
            <Tip number={3} title={'Submit your solution'} text={sampleText} />
            <Tip number={4} title={' Give feedback'} text={sampleText} />
        </Wrapper>
    );
};

export default Tips;

const Wrapper = styled.div`
    width: 1250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
`;
