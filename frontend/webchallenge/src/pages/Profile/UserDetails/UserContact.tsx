import React from 'react';
import styled from 'styled-components';

const UserContact: React.FC = () => {
    return (
        <Wrapper>
            <Title>Contact</Title>
            <Contact>
                <ConctactImg></ConctactImg>
                <ContactText>williamButtler@69.xd</ContactText>
            </Contact>
            <Contact>
                <ConctactImg></ConctactImg>
                <ContactText> NumerDoTwojejStarej </ContactText>
            </Contact>
            <Contact>
                <ConctactImg></ConctactImg>
                <ContactText>New York</ContactText>
            </Contact>
        </Wrapper>
    );
};

export default UserContact;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 170px;
`;

const Title = styled.div`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 15px;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const ConctactImg = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 15px;
`;

const ContactText = styled.span`
    font-size: 12px;
    font-weight: 500;
`;
