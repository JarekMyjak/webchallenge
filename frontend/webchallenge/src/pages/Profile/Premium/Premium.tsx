import React from 'react';
import TitleBar from '../../../components/TitleBar';
import {
    Wrapper,
    Info,
    Bar,
    ProgressBar,
    DownSection,
    PremiumDays,
    DayCounter,
    RenewButton,
} from './Premium.styles';

const Premium: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar
                imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/1024px-Windows_Settings_app_icon.png'
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
