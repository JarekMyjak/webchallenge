import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Container = styled.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;
export const Table = styled.table`
    border: none;
    border-collapse: collapse;
`;

export const Header = styled.th`
    padding: 5px 15px;
    font-size: 24px;
    background-color: ${colors.navBarBackground};
`;

export const Row = styled.tr`
    font-size: 20px;
    background-color: ${colors.backgroundPrimary};
    &:nth-child(odd) {
        background-color: #3b3939;
    }
`;

export const Column = styled.td`
    padding: 10px 15px;
    text-align: center;
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.2s;
    background-color: ${colors.iris};
    &:hover {
        background-color: ${colors.irisDark};
    }
`;
