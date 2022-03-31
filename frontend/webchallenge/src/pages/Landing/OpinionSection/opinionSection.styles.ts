import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    background-color: ${colors.backgroundPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primaryText};
    padding: 50px 0 60px 0;
    border-bottom: 1px solid #c4c4c4;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

export const Description = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${colors.secondaryText};
    margin-bottom: 80px;
    width: 600px;
    text-align: center;
`;

export const Comments = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Comment = styled.div`
    height: 150px;
    width: 850px;
    background-color: #f2f2f2;
    margin-bottom: 65px;
    border-radius: 100px 1px 1px 100px;
`;
