import React from 'react';
import {IconType} from 'react-icons';
import styled from 'styled-components';
import colors from '../helpers/colors.helpers';

interface ITitleBar {
    imageSrc?: string;
    icon?: IconType;
    text: string;
}

const TitleBar: React.FC<ITitleBar> = props => {
    return (
        <ProfileBar>
            {props?.imageSrc !== undefined && (
                <ProfileImg src={props.imageSrc} />
            )}
            {props?.icon !== undefined && <props.icon />}
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
    svg {
        width: 25px;
        height: 25px;
        margin-top: 5px;
        margin-right: 10px;
    }
`;

const ProfileImg = styled.img`
    width: 35px;
    height: 32px;
    c
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
