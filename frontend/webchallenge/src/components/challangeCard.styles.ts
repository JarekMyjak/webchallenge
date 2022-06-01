import styled from 'styled-components';
import colors from '../helpers/colors.helpers';

export const Wrapper = styled.div`
    background-color: #c4c4c4;
    width: 330px;
    height: 500px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

interface IPremium {
    isPremium: boolean;
}
export const Top = styled.div<IPremium>`
    display: flex;
    box-sizing: border-box;
    height: 300px;
    padding: 10px 15px;
    flex-direction: column;
    border-radius: 10px 10px 0 0;
    border: 2px solid
        ${p => (p.isPremium ? `${colors.iris}` : `${colors.orange}`)};
    border-bottom: 0;
`;

export const Status = styled.div<IPremium>`
    width: 35px;
    height: 35px;
    border-radius: 35px;
    background-color: ${p =>
        p.isPremium ? `${colors.iris}` : `${colors.orange}`};
    text-align: center;
    line-height: 35px;

    font-size: 18px;
    font-weight: 800;
    margin-bottom: 10px;
`;

export const ChallangeImg = styled.div`
    height: 225px;
    width: 100%;
    border-radius: 10px 10px 1px 1px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const Bottom = styled.div`
    box-sizing: border-box;
    background-color: #f2f2f2;
    height: 200px;
    color: black;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`;
export const Text = styled.div`
    font-size: 12px;
    font-weight: 300;
`;

export const Description = styled.div`
    margin-bottom: 10px;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Technologies = styled.div`
    font-variant: small-caps;
    width: 140px;
    p {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
    }
`;

export const Experience = styled(Technologies)`
    text-align: right;
    span {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .advanced {
        color: #f24e1e;
    }
    .intermediate {
        color: ${colors.orange};
    }
    .begginer {
        color: #0acf83;
    }
`;

export const TechContainer = styled.div`
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
