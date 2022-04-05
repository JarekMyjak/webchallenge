import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import imageBackground from '../../../assets/images/landing/Background_graphic_comment.jpg';

export const Wrapper = styled.section`
    height: 660px;
    display: flex;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${colors.borderPrimary};
    background-image: url(${imageBackground});
    background-size: cover;
`;

export const TextContent = styled.div``;

export const Title = styled.div`
    font-size: 36px;
    font-weight: Bold;
    width: 850px;
`;

export const DownText = styled.div`
    font-size: 18px;
    font-weight: 400;
    width: 550px;
    color: ${colors.secondaryText};
`;

export const Icons = styled.div`
    width: 550px;
    height: 360px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`;

export const Icon = styled.img`
    width: 150px;
    height: 150px;
    /* background-color: green; */
`;
