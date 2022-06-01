import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Container = styled.div`
    width: 1250px;
    background-color: ${colors.backgroundSecondary};
    margin-top: 50px;
    box-sizing: border-box;
    padding: 45px 55px;
`;

export const TitleAndOptions = styled.div`
    color: white;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Options = styled.div`
    height: 30px;
    width: 200px;
    background-color: green;
`;
