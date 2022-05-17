import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.div`
    margin-top: 50px;
    width: 1250px;
    /* height: 375px; */
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 40px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 60px;
`;

export const Filters = styled.div`
    display: flex;
`;

export const Filter = styled.div`
    width: 100px;
    height: 30px;
    background-color: green;
    margin-left: 10px;
`;

export const ChallangeList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
