import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';

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

const Wrapper = styled.div`
    margin-top: 50px;
    width: 1250px;
    height: 375px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 40px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 60px;
`;

const Filters = styled.div`
    display: flex;
`;

const Filter = styled.div`
    width: 100px;
    height: 30px;
    background-color: green;
    margin-left: 10px;
`;
