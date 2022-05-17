import React from 'react';
import TitleBar from '../../../components/TitleBar';
import {Wrapper, TopBar, Filters, Filter} from './Activities.styles';

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
        </Wrapper>
    );
};

export default Activities;
