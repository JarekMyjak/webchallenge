import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

const BarLinks: React.FC = () => {
    return (
        <Wrapper>
            <BarContainer>
                <Bar />
            </BarContainer>
            <LinksContainer>
                <CustomLink to='/profile'>
                    <LinkButton>
                        <Icon src='https://i.imgur.com/JOEfrjk.png' />
                    </LinkButton>
                </CustomLink>
                <CustomLink to='/profile'>
                    <LinkButton>
                        <Icon src='https://i.imgur.com/p1QC4T1.png' />
                    </LinkButton>
                </CustomLink>
                <CustomLink to='/profile'>
                    <LinkButton>
                        <Icon src='https://i.imgur.com/H9bP2yA.png' />
                    </LinkButton>
                </CustomLink>
            </LinksContainer>
        </Wrapper>
    );
};

export default BarLinks;

const Wrapper = styled.div`
    color: white;
    display: flex;
    /* align-items: center; */
`;

const BarContainer = styled.div`
    width: 3px;
    height: 150px;
    background-color: black;
`;

const Bar = styled.div`
    width: 3px;
    height: 50px;
    background-color: ${colors.orange};
`;

const LinksContainer = styled.div`
    width: 65px;
    height: 150px;
`;

const CustomLink = styled(Link)``;

const LinkButton = styled.button`
    width: 67px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: 3px;
`;
