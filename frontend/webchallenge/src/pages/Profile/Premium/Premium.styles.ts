import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.div`
    width: 400px;
    height: 350px;
    background-color: ${colors.backgroundSecondary};
    color: white;
    padding: 25px 35px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Info = styled.div`
    width: 100%;
    height: 150px;
    background-color: green;
`;

export const Bar = styled.div`
    width: 100%;
    height: 20px;
    background-color: black;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
`;
export const ProgressBar = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    background-color: ${colors.orange};
`;

export const DownSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
`;

export const PremiumDays = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    font-weight: 500;
`;
export const DayCounter = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

export const RenewButton = styled.button`
    background-color: ${colors.iris};
    border: none;
    cursor: pointer;
    color: white;
    height: 30px;
    width: 135px;
    border-radius: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 11px;
    font-weight: bold;
`;
