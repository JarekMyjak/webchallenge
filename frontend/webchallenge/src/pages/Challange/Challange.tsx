import React from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import TopSection from './TopSection';

const Challange: React.FC = () => {
    return (
        <Wrapper>
            <TopSection />
        </Wrapper>
    );
};

export default Challange;

const Wrapper = styled.div`
    width: 1250px;
    height: 500px;
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 45px 60px;
`;
