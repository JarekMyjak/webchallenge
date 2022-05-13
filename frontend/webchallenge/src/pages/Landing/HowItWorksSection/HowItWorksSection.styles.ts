import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    height: 760px;
    background-color: ${colors.backgroundPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0 30px 0;
    /*border-bottom: 1px solid ${colors.borderPrimary};*/
`;

export const Content = styled.div`
    width: 820px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 18px;
`;

export const ProgressContainer = styled.div`
    width: 680px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
`;

export const ProgressText = styled.div`
    display: flex;
    width: 650px;
    justify-content: space-between;
    margin-bottom: 10px;
`;

interface IText {
    isActive?: boolean;
}

export const Text = styled.span<IText>`
    font-size: 16px;
    font-weight: 500;
    color: ${props => (props.isActive ? 'white' : '#C4C4C4')};
`;

export const ProgressBar = styled.div`
    width: 680px;
    height: 5px;
    background-color: black;
`;

export const CurrentBar = styled.div`
    height: 5px;
    background-color: ${colors.orange};
    width: 198px;
`;

export const ImageContainer = styled.div`
    height: 410px;
    width: 820px;
    background-color: ${colors.orange};
    box-shadow: 0px 4px 4px #000000;
    margin-bottom: 40px;
`;

export const Image = styled.img`
    width: 100%;
`;

export const Description = styled.div`
    box-sizing: border-box;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    width: 720px;
`;
