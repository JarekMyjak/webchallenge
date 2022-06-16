import React from 'react';
import styled from 'styled-components';
import colors from '../helpers/colors.helpers';

interface ITitleBar {
    imageSrc?: string;
    text: string;
}

const TitleBar: React.FC<ITitleBar> = props => {
    return (
        <ProfileBar>
            {props?.imageSrc !== undefined && (
                <ProfileImg src={props.imageSrc} />
            )}
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
    height: 30px;
    margin-right: 10px;
`;

const ProfileTextWrapper = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const Bar = styled.div`
    height: 3px;
    width: 100%;
    background-color: ${colors.orange};
`;
