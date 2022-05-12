import React from 'react';
import styled from 'styled-components';
import colors from '../helpers/colors.helpers';

interface ITitleBar {
    src: string;
    text: string;
}

const TitleBar: React.FC<ITitleBar> = props => {
    return (
        <ProfileBar>
            <ProfileImg src={props.src} />
            <div>
                <ProfileTextWrapper>{props.text}</ProfileTextWrapper>
                <Bar />
            </div>
        </ProfileBar>
    );
};

export default TitleBar;

const ProfileBar = styled.div`
    display: flex;
`;

const ProfileImg = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

const ProfileTextWrapper = styled.div`
    font-size: 17px;
    font-weight: 700;
`;

const Bar = styled.div`
    height: 4px;
    width: 100%;
    background-color: ${colors.orange};
`;
