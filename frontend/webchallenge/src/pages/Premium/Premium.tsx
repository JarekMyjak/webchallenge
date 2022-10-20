import React from 'react';
import {
    Container,
    TypePremium,
    OpinionSection,
    AdvantagesPremium,
    Description,
    PremiumContainer,
    NonePremium,
    YearlyPremium,
    MonthlyPremium,
    Title, 
    SubTitle,
    IconPremium,
    Payment,
    Period,
    Value
} from './Premium.styles';;


const Premium: React.FC = () => {
    return (
        <Container>
            <TypePremium>  
                <Description>Contrary to popular belief, Lorem Ipsum is not simply random text.</Description>
                <PremiumContainer>
                    <NonePremium>
                        <Title>FREE</Title>
                        <IconPremium src="https://img.icons8.com/material-rounded/96/22C3E6/no-hidden-fee.png"/>
                        <Payment>
                            <Value>0$/</Value> 
                            <Period>MONTH</Period>
                        </Payment>
                        <SubTitle>It is a long established fact that a reader</SubTitle>
                        


                    </NonePremium>

                    <YearlyPremium>
                        <Title>YEARLY</Title>
                        <SubTitle>It is a long established fact that a reader</SubTitle>
                    </YearlyPremium>

                    <MonthlyPremium>
                        <Title>MONTHLY</Title>
                        <SubTitle>It is a long established fact that a reader</SubTitle>
                    </MonthlyPremium>
                </PremiumContainer>
            </TypePremium>

            <OpinionSection>

            </OpinionSection>

            <AdvantagesPremium>

            </AdvantagesPremium>
        </Container>
    );
};

export default Premium;