import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 1250px;
    background-color: ${colors.backgroundSecondary};
    margin-top: 50px;
    box-sizing: border-box;
    padding: 45px 55px;
`;

export const TitleAndOptions = styled.div`
    color: white;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 60px;
    column-gap: 75px;
`;
export const LoaderList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
`;

export const Options = styled.div`
    height: 30px;
    width: 200px;
    background-color: green;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
`;
