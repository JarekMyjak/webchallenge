import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    background-color: ${colors.backgroundPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primaryText};
    padding: 50px 0 80px 0;
    border-bottom: 1px solid ${colors.borderPrimary};
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
    margin-bottom: 30px;
`;

export const Cards = styled.div`
    width: 1200px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 80px;
`;

export const Card = styled.div`
    background-color: #c4c4c4;
    width: 330px;
    height: 500px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MoreChallanges = styled.div`
    text-transform: uppercase;
    font-size: 18px;
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
    width: 200px;
    margin-top: 10px;
`;
