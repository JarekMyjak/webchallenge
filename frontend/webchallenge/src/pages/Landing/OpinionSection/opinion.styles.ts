import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 150px;
    width: 800px;
    background-color: #f2f2f2;
    margin-bottom: 52px;
    border-radius: 100px 1px 1px 100px;
    display: flex;
    color: black;
    align-items: center;
    justify-content: space-between;
    /// box-shadow ?
    box-shadow: 0px 4px 4px black;
`;

export const Avatar = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 75px;
    box-sizing: border-box;
    border: 2px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
`;

export const Comment = styled.div`
    width: 400px;
`;

export const Text = styled.div`
    font-size: 14px;
    margin-bottom: 15px;
    font-weight: 500;
`;

export const Sign = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

export const Technology = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 50px;
`;
