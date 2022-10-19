import React from 'react';
import styled from 'styled-components';
import {
    Wrapper,
    Forward,
    FirstSection,
    Icon,
    FullDate,
    Text,
} from './Activity.styles';

interface IActivity {
    type: 'newChallenge' | 'completed' | 'commented';
    date: string;
}

const Activity: React.FC<IActivity> = props => {
    const selectText = () => {
        switch (props.type) {
            case 'newChallenge':
                return (
                    <>
                        You have just started a <b>new challenge</b>.{' '}
                        <Forward>Go to this...</Forward>
                    </>
                );
            case 'completed':
                return (
                    <>
                        You've <b>completed </b>the challenge, congratulations.{' '}
                        <Forward>See more challenges...</Forward>
                    </>
                );
            case 'commented':
                return (
                    <>
                        You have <b>commented</b> on another user's post.{' '}
                        <Forward>See comments...</Forward>
                    </>
                );
            default:
                return <>Something is no yes if u see this</>;
        }
    };
    const selectIcon = () => {
        switch (props.type) {
            case 'newChallenge':
                return './src/assets/icons/plus.png';
            case 'completed':
                return './src/assets/icons/check.png';
            case 'commented':
                return './src/assets/icons/chat.png';
            default:
                return '';
        }
    };

    return (
        <Wrapper>
            <FirstSection>
                <Icon src={selectIcon()} />
                <Text>{selectText()}</Text>
            </FirstSection>
            <FullDate>{props.date}</FullDate>
        </Wrapper>
    );
};

export default Activity;
