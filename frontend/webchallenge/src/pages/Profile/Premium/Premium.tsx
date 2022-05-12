import React from 'react';
import styled from 'styled-components';
import TitleBar from '../../../components/TitleBar';
import colors from '../../../helpers/colors.helpers';

const Premium: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
                text='Subscription'
            />
            <Info></Info>
            <Bar>
                <ProgressBar />
            </Bar>
            <DownSection>
                <PremiumDays>
                    <DayCounter>24</DayCounter>
                    <>Left days</>
                </PremiumDays>
                <RenewButton>Renew subscription</RenewButton>
            </DownSection>
        </Wrapper>
    );
};

export default Premium;

const Wrapper = styled.div`
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

const Info = styled.div`
    width: 100%;
    height: 150px;
    background-color: green;
`;

const Bar = styled.div`
    width: 100%;
    height: 20px;
    background-color: black;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
`;
const ProgressBar = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 10px;
    background-color: ${colors.orange};
`;

const DownSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
`;

const PremiumDays = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 11px;
    font-weight: 500;
`;
const DayCounter = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const RenewButton = styled.button`
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
