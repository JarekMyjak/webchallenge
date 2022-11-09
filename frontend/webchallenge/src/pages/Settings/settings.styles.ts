import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    /* height: 1050px; */
    background-color: ${colors.backgroundSecondary};
    box-sizing: border-box;
    padding: 80px 40px 80px 80px;
    color: white;
`;

export const CustomForm = styled.form`
    display: flex;
`;

export const LeftSide = styled.div`
    width: 450px;
`;

export const RightSide = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const InputTitle = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const CustomInput = styled.input`
    height: 25px;
    width: 450px;
    background-color: ${colors.borderPrimary};
    border: none;
    :focus {
        outline: none;
    }
    box-sizing: border-box;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;

export const CustomTextarea = styled.textarea`
    min-height: 80px;
    min-width: 450px;
    max-height: 80px;
    max-width: 450px;
    background-color: ${colors.borderPrimary};
    border: none;
    :focus {
        outline: none;
    }
    box-sizing: border-box;
    padding: 10px;
`;

export const FormSection = styled.section`
    margin: 25px 0 20px 0;
`;

export const AvatarContainer = styled.div`
    width: 206px;
    height: 206px;
    position: relative;
`;

export const CurrentAvatar = styled.img`
    width: 206px;
    height: 206px;
    border-radius: 40px;
    object-fit: cover;
`;

export const AvatarButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: ${colors.iris};
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: white;
    font-size: 17px;
    font-weight: 700;
    position: absolute;
    bottom: -15px;
    left: calc(103px - 50px);
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ButtonIcon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: cover;
`;

export const Text = styled.div`
    height: 100px;
    width: 400px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`;

export const UpdateButton = styled.button`
    height: 40px;
    width: 200px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    background-color: ${colors.iris};
    color: white;
`;

export const UpdateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
