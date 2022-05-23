import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.div`
    margin-top: 50px;
    width: 1250px;
    height: 380px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 40px 50px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
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

export const UserActivities = styled.div`
    height: 240px;
`;

export const Space = styled.div`
    margin: 10px 12px;
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: ${colors.borderPrimary}; //temp
    ::before,
    ::after {
        display: block;
        content: ' ';
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background-color: ${colors.borderPrimary};
        transform: translateY(-12px);
    }
    ::before {
        transform: translateY(7px);
    }
`;
