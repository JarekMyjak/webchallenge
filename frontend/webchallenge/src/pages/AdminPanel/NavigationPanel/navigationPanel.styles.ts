import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 330px;
    height: auto;
    background-color: transparent;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    background-color: transparent;
    margin-top: 40px;
    width: 350px;
    height: 80px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 5px;
    color: white;
`;

export const NavPanel = styled.div`
    color: white;
    margin-top: 40px;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const IconArrow = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 130px;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
`;
