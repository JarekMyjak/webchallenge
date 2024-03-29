import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';

export const Wrapper = styled.section`
    display: flex;
`;

export const ImageAndButtons = styled.div``;

export const ImageWrapper = styled.div`
    width: 500px;
    height: 350px;
    background-color: #d9d9d9;
    box-sizing: border-box;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 470px;
    height: 330px;
    object-fit: cover;
`;

export const ButtonsWrapper = styled.div`
    width: 500px;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

interface IButtonView {
    active?: boolean;
}

export const ButtonView = styled.div<IButtonView>`
    width: 125px;
    height: 30px;
    background-color: ${colors.borderPrimary}71; /* sum that will give you transparency */
    color: white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 400;
    transition: 0.2s;
    cursor: pointer;
    ${props =>
        props.active &&
        `background-color: ${colors.iris}; filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); font-weight: 700;`};
`;

export const ChallengeData = styled.div`
    flex-grow: 1;
    box-sizing: border-box;
    padding-left: 25px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Info = styled.div``;

export const Title = styled.span``;

export const TitleBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    ${Title} {
        font-weight: 500;
        font-size: 36px;
        color: #f2f2f2;
    }
`;

interface IPremium {
    isPremium: boolean | undefined;
}

export const Status = styled.div<IPremium>`
    width: 40px;
    height: 40px;
    border-radius: 35px;
    background-color: ${p =>
        p.isPremium ? `${colors.iris}` : `${colors.orange}`};
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const Description = styled.div`
    height: 85px;
    font-weight: 300;
    font-size: 16px;
    color: white;
`;

export const TechnologiesAndExperience = styled.div`
    display: flex;
`;

export const Technologies = styled.div`
    ${Title} {
        font-size: 20px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
    }
    width: 300px;
`;

export const TechnologiesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    span {
        font-size: 16px;
        margin: 0px 10px -2px 0px;
        font-weight: 500;
    }
    .HTML {
        color: ${colors.orange};
    }
    .CSS {
        color: #5d5fef;
    }
    .REACT {
        color: #5db2ef;
    }
    .JAVASCRIPT {
        color: #e8c23a;
    }
    .TYPESCRIPT {
        color: #435fdb;
    }
    .API {
        color: #0acf83;
    }
`;

export const Experience = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    color: white;
    text-align: right;
    ${Title} {
        font-size: 20px;
        text-transform: uppercase;
        color: white;
        font-weight: 600;
    }
    span {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
    }
`;

export const StartButton = styled.a`
    background-color: #f24e1e;
    font-size: 20px;
    font-weight: 700;
    height: 60px;
    width: 200px;
    border-radius: 50px;
    cursor: pointer;
    border: none;
    color: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    transition: 0.2s;
    &:hover,
    &:focus,
    &:focus-visible {
        outline: none;
        background-color: #f26e1e;
    }
`;

export const UploadButton = styled(StartButton)`
    background-color: ${colors.iris};
    &:hover,
    &:focus,
    &:focus-visible {
        outline: none;
        background-color: ${colors.irisDark};
    }
`;

export const PremiumButton = styled(StartButton)<IPremium>`
    ${props =>
        !props.isPremium &&
        'background-color: #757575; color:#a3a3a3;&:hover{cursor: not-allowed;background-color: #757575;}'};
`;

export const ReactMarkdownCustom = styled(ReactMarkdown)`
    color: white;
    p > a {
        color: white;
    }
    code {
        padding: 5px 20px;
        border-radius: 3px;
        background-color: ${colors.backgroundPrimary};
        box-shadow: 0px 0px 10px ${colors.backgroundPrimary};
    }
`;
