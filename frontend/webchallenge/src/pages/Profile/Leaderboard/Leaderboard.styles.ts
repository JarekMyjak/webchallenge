import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.div`
    width: 400px;
    height: 375px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 25px 35px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const Board = styled.div`
    box-sizing: border-box;
    width: 350px;
    height: 200px;
`;

export const Headers = styled.div`
    display: flex;
    margin: 20px 0;
`;

interface IHeader {
    width: number;
}
export const Header = styled.div<IHeader>`
    font-size: 10px;
    font-weight: 700;
    text-align: center;
    ${props => `
    width:${props.width}px;
    `}
`;
