import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    height: 900px;
    background-color: #454545;
    display: flex;
    border-bottom: 1px solid white;
`;

export const LeftSide = styled.div`
    min-width: 900px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div``;

export const TextContent = styled.div`
    width: 650px;
    color: white;
`;

export const Title = styled.div`
    font-weight: bold;
    font-size: 36px;
    word-wrap: wrap;
    letter-spacing: -1px;
    line-height: 40px;
    margin: 40px 0;
`;

export const DownText = styled.div`
    font-size: 18px;
    width: 530px;
    color: #d0d0d0;
    margin: 30px 0;
`;

export const CreateAccButton = styled.button`
    background-color: ${colors.iris};
    border: none;
    cursor: pointer;
    color: white;
    height: 50px;
    width: 250px;
    border-radius: 47px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    font-weight: bold;
    margin-top: 60px;
    //TODO: Add hover
`;

export const RightSide = styled.div`
    flex-grow: 1;
`;

export const ImageBackground = styled.img`
    height: 100%;
    object-fit: contain;
`;
