import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    height: 660px;
    display: flex;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.borderPrimary};
`;

export const TextContent = styled.div``;

export const Title = styled.div`
    font-size: 48px;
    font-weight: Bold;
    width: 850px;
`;

export const DownText = styled.div`
    font-size: 24px;
    font-weight: 500;
    width: 630px;
`;

export const Icons = styled.div`
    width: 470px;
    height: 320px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`;

export const Icon = styled.div`
    width: 150px;
    height: 150px;
    background-color: green;
`;
