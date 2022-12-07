import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export interface IWrapper {
    number: number;
}

export const Wrapper = styled.div<IWrapper>`
    box-shadow: 0px 0px 10px black;
    width: 620px;
    height: 100px;
    background-color: ${colors.backgroundSecondary};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    ${props =>
        props.number % 2 === 0 &&
        `flex-direction: row-reverse; 
        ${Title}{text-align: right;}
        ${Text}{text-align: right;}`}
`;

export const BigNumber = styled.div`
    min-width: 70px;
    max-width: 70px;
    height: 70px;
    border-radius: 5px;
    background-color: ${colors.orange};
    color: ${colors.backgroundSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    font-weight: bold;
`;

export const TextContent = styled.div`
    height: 100%;
    flex-grow: 1;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
`;

export const Title = styled.span`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const Text = styled.span`
    font-size: 14px;
    font-weight: 300;
`;
