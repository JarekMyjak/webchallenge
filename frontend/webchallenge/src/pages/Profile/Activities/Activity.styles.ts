import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

export const Text = styled.div`
    font-size: 17px;
    padding-left: 20px;
`;

export const FirstSection = styled.section`
    display: flex;
    align-items: center;
`;

export const FullDate = styled.div`
    font-size: 17px;
    font-weight: bold;
`;

export const Forward = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;
