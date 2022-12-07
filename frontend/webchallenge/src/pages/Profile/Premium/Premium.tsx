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
import keyIcon from '../../../assets/icons/key.png';

const Premium: React.FC = () => {
    return (
        <Wrapper>
            <TitleBar imageSrc={keyIcon} text='Subscription' />
            {/* <Info></Info> */}
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
