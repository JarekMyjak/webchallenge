import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    margin: 10px 0;
`;

export const Rank = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
`;

export const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    object-fit: cover;
    margin: 0 15px 0 10px;
`;

export const User = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 200px;
    height: 50px;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
`;

export const Score = styled(Rank)`
    width: 110px;
`;
