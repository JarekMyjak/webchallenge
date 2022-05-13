import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    background-color: ${colors.backgroundPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primaryText};
    padding: 40px 0 60px 0;
    /*border-bottom: 1px solid ${colors.borderPrimary};*/
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

export const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${colors.secondaryText};
    margin-bottom: 45px;
`;

export const Cards = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 80px;
`;

export const MoreChallanges = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const Bar = styled.div`
    height: 5px;
    background-color: ${colors.orange};
    width: 180px;
    margin-top: 10px;
    border-radius: 2px;
`;
