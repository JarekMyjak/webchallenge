import React from 'react';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

const AboutUser: React.FC = () => {
    return (
        <Wrapper>
            <Description>
                <DescTitle>About me</DescTitle>
                <DescText>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here'
                </DescText>
            </Description>
        </Wrapper>
    );
};

export default AboutUser;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 0;
`;

const DescTitle = styled.span`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const DescText = styled.span`
    font-size: 17px;
    font-weight: 400;
`;
