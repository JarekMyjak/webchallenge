import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Wrapper = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
`;

export const Counter = styled.span`
    font-size: 36px;
    font-weight: 700;
    width: 100%;
`;

export const Text = styled.span`
    font-size: 12px;
    font-weight: 700;
`;

export const Progress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 50px;
    ${Text} {
        color: #f24e1e;
    }
    ${Counter} {
        text-align: right;
    }
`;

export const AllChallenges = styled(Progress)`
    ${Text} {
        color: ${colors.orange};
    }
    ${Counter} {
        text-align: center;
    }
`;
export const Completed = styled(Progress)`
    ${Text} {
        color: #0acf83;
    }
    ${Counter} {
        text-align: left;
    }
`;

export const Bar = styled.div`
    height: 70px;
    width: 1px;
    background-color: white;
`;
