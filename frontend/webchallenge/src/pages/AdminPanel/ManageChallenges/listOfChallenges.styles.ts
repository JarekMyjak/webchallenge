import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Container = styled.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    align-items: baseline;
    justify-content: center;
`;

export const LoaderContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoaderText = styled.span`
    opacity: 0.3;
    margin-top: 10px;
    user-select: none;
`;

export const Table = styled.table`
    border: none;
    border-collapse: collapse;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 2px 2px 10px black;
`;

export const Header = styled.th`
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 400;
    background-color: ${colors.backgroundPrimary};
    text-align: right;
    &:first-child {
        text-align: left;
    }
    &:last-child {
        text-align: center;
    }
`;

export const Row = styled.tr`
    background-color: ${colors.backgroundPrimary};
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid #3b3939;
    &:last-child {
        border-bottom: none;
    }
`;

export const Column = styled.td`
    padding: 10px 15px;
    text-align: right;
    &:first-child {
        text-align: left;
    }
    &:last-child {
        text-align: center;
    }
`;

export const Button = styled.button`
    padding: 3px 6px;
    border: none;
    color: white;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.2s;
    background-color: ${colors.iris};
    &:hover {
        background-color: ${colors.irisDark};
    }
`;
