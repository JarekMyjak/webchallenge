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
    type: 'newChallange' | 'completed' | 'commented';
    date: string;
}

const Activity: React.FC<IActivity> = props => {
    const selectText = () => {
        switch (props.type) {
            case 'newChallange':
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
                        <Forward>See more challanges...</Forward>
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
            case 'newChallange':
                return 'https://i.imgur.com/XMjPJGE.png';
            case 'completed':
                return 'https://i.imgur.com/XMjPJGE.png';
            case 'commented':
                return 'https://i.imgur.com/XMjPJGE.png';
            default:
                return 'https://i.imgur.com/XMjPJGE.png';
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
