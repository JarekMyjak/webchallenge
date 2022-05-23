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
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
                    text='Your activities'
                />
                <Filters>
                    <Filter>Filter By</Filter>
                </Filters>
            </TopBar>
            <UserActivities>
                <Activity type='commented' date='21th March 2022' />
                <Space />
                <Activity type='newChallange' date='21th March 2022' />
                <Space />
                <Activity type='completed' date='21th March 2022' />
                <Space />
                <Activity type='commented' date='21th March 2022' />
            </UserActivities>
        </Wrapper>
    );
};

export default Activities;
