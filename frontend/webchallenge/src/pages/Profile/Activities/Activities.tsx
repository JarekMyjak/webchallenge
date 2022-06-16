import React from 'react';
import TitleBar from '../../../components/TitleBar';
import {
    Wrapper,
    TopBar,
    Filters,
    Filter,
    UserActivities,
    Space,
} from './Activities.styles';
import Activity from './Activity';

const Activities: React.FC = () => {
    return (
        <Wrapper>
            <TopBar>
                <TitleBar
                    imageSrc='./src/assets/icons/todo.png'
                    text='Your activities'
                />
                <Filters>
                    <Filter>Filter By</Filter>
                </Filters>
            </TopBar>
            <UserActivities>
                <Activity type='commented' date='1st March 2022' />
                <Space />
                <Activity type='newChallange' date='20th February 2022' />
                <Space />
                <Activity type='completed' date='17th February 2022' />
                <Space />
                <Activity type='commented' date='1st January 2022' />
            </UserActivities>
        </Wrapper>
    );
};

export default Activities;
