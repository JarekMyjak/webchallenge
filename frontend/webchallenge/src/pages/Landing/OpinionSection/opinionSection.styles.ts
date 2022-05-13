import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.section`
    background-color: ${colors.backgroundPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primaryText};
    padding: 50px 0 60px 0;
    border-bottom: 1px solid ${colors.backgroundSecondary};
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

export const Opinions = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
