import React from 'react';
import styled, {keyframes} from 'styled-components';
import colors from '../helpers/colors.helpers';

const Loader = () => {
    return (
        <Container>
            <Line>
                <Box delay='0.1s' />
                <Box delay='0.3s' />
                <Box delay='0.5s' />
            </Line>
            <Line>
                <Box delay='0.3s' />
                <Box delay='0.5s' />
                <Box delay='0.9s' />
            </Line>
            <Line>
                <Box delay='0.5s' />
                <Box delay='0.9s' />
                <Box delay='0.9s' />
            </Line>
        </Container>
    );
};

export default Loader;

const breatheAnimation = keyframes`
 0% { transform:scale(1.0) }
 50%{transform:scale(1.2)}
 100% { transform:scale(0.9) }
 `;
const rotateAnim = keyframes`
 0% { transform:rotateX(0deg) }
 15% { transform:rotateX(0deg)  }
 25% { transform:rotateZ(90deg) }
 40% { transform:rotateZ(90deg) }
 50% { transform:rotateZ(180deg) }
 65% { transform:rotateZ(180deg) }
 75% { transform:rotateZ(270deg) }
 85% { transform:rotateZ(270deg) }
 100% { transform:rotateZ(360deg) }
 `;

const Container = styled.div`
    display: flex;
    gap: 1px;
    flex-direction: column;
    animation-name: ${rotateAnim};
    animation-duration: 3s;
    animation-iteration-count: infinite;
`;
const Line = styled.div`
    display: flex;
    gap: 1px;
`;

interface IBox {
    delay: string;
}

const Box = styled.div<IBox>`
    width: 20px;
    height: 20px;
    background-color: ${colors.orange};
    gap: 1px;
    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-delay: ${p => p.delay};
    box-shadow: 1px 1px 10px black;
`;
