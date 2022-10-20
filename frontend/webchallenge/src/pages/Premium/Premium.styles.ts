import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto; 
    background-color: transparent;
`;
export const TypePremium = styled.section`
    width: auto;
    height: auto; 
    background-color: transparent;
`;
export const Description = styled.div`
    width: max-content;
    height: 50px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    
`;
export const PremiumContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 40px;
    width: max-content;
    height: 600px;
    background-color: transparent;
    color: white;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

`;
export const NonePremium = styled.div`
    width: 330px;
    background-color: ${colors.backgroundSecondary};
    border: 3px solid ${colors.borderPrimary};
    border-radius: 20px;
    z-index: 1;
    padding-top: 30px;
    text-align: center;
`;
export const Title = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    
`;
export const IconPremium = styled.img`
    width: 75px;
    height: 75px;
    margin-top: 20px;

`;
export const Payment = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
    font-weight: bold;
    margin-top: 20px;
`;
export const Value = styled.div`
    font-size: 24px;
`;
export const Period = styled.div`
    font-size: 14px;
`;
export const SubTitle = styled.div`
    font-size: 14px;
    text-align: center;
    font-weight: normal;
    margin-top: 20px;
`;

export const YearlyPremium = styled.div`
    width: 330px;
    background-color: ${colors.backgroundSecondary};
    border: 3px solid ${colors.orange};
    border-radius: 20px;
    box-shadow: 0px 0px 120px 10px rgba(196, 196, 196, 0.6);
    z-index: 0;
    padding-top: 20px;
`;
export const MonthlyPremium = styled.div`
    width: 330px;
    background-color: ${colors.backgroundSecondary};
    border: 3px solid ${colors.borderPrimary};
    border-radius: 20px;
    z-index: 1;
    padding-top: 20px;
`;



export const OpinionSection = styled.section`
    width: 100px;
    height: 100px; 
    background-color: transparent;
`;
export const AdvantagesPremium = styled.section`
    width: 100px;
    height: 100px; 
    background-color: transparent;
`;