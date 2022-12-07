import React from 'react';
import styled from 'styled-components';
import colors from '../helpers/colors.helpers';
import Loader from './Loader';

interface ILoaderContainer {
    text: string;
}

const LoaderContainer: React.FC<ILoaderContainer> = props => {
    return (
        <LoadingContainer>
            <Loader />
            <LoaderText>{props.text}</LoaderText>
        </LoadingContainer>
    );
};

export default LoaderContainer;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 94vh;
    justify-content: center;
    align-items: center;
`;

const LoaderText = styled.span`
    opacity: 0.3;
    margin-top: 10px;
    user-select: none;
    font-size: 26px;
    color: ${colors.secondaryText};
`;
