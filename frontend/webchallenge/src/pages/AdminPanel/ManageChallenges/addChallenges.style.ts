import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';

export const Container = styled.div`
    height: calc(100% - 20px);
    width: 100%;
    background-color: ${colors.backgroundSecondary};
    color: white;
    font-size: 32px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.div`
    min-height: 600px;
    width: 600px;
    background-color: ${colors.backgroundPrimary};
    color: white;
    font-size: 24px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    box-shadow: 2px 2px 10px black;
`;
export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

interface IFieldError {
    error: boolean;
}

export const FieldError = styled.div<IFieldError>`
    color: red;
    font-size: 12px;
    height: 16px;
    transition: 0.2s;
    transform: ${p => (p.error ? 'translateY(0px)' : 'translateY(-16px)')};
    opacity: ${p => (p.error ? '1' : '0')};
    bottom: 0;
    position: relative;
`;

export const CustomLabel = styled.label`
    display: inline-block;
    width: 200px;
    font-size: 24px;
    text-align: right;
    margin-right: 10px;
    box-shadow: 2px 2px 10px black;
`;

export const CustomInputText = styled.input`
    box-sizing: border-box;
    width: 500px;
    height: 50px;
    font-size: 20px;
    background-color: ${colors.backgroundSecondary};
    border: none;
    border-radius: 3px;
    transition: 0.2s;
    padding-left: 5px;
    color: white;
    border-left: 2px solid ${colors.backgroundSecondary};
    &:focus {
        outline: none;
        border-left: 2px solid ${colors.orange};
    }
`;
export const CustomTextArea = styled.textarea`
    box-sizing: border-box;
    min-width: 500px;
    min-height: 250px;
    max-width: 500px;
    max-height: 250px;
    font-size: 12px;
    background-color: ${colors.backgroundSecondary};
    border: none;
    border-radius: 3px;
    transition: 0.2s;
    padding-left: 5px;
    color: white;
    border-left: 2px solid ${colors.backgroundSecondary};
    &:focus {
        outline: none;
        border-left: 2px solid ${colors.orange};
    }
`;

export const CustomFile = styled.input`
    display: none;
`;

export const CustomFileLabel = styled.label`
    display: block;
    width: 100%;
    cursor: pointer;
`;

export const FileButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const FileButton = styled.button<IFieldError>`
    width: 200px;
    height: 50px;
    font-size: 16px;
    padding: 0;
    background-color: ${p => (p.error ? '#8a1111' : `${colors.orange}`)};
    border: 2px solid ${p => (p.error ? `#8a1111` : `${colors.orange}`)};

    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s;
    text-overflow: ellipsis;
    &:hover,
    &:focus,
    &:focus-visible {
        outline: none;
        background-color: ${p => (p.error ? '#5e0b0b' : `#c47000`)};

        /* content: 'upload images xd'; */
    }
`;

export const SubmitButton = styled.button`
    width: 200px;
    font-size: 20px;
    height: 50px;
    padding: 0;
    border: none;
    background-color: ${colors.iris};
    color: white;
    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s;
    border: 2px solid ${colors.iris};
    &:hover,
    &:focus,
    &:focus-visible {
        outline: none;
        background-color: ${colors.irisDark};
    }
`;

export const SelectDiv = styled.div`
    width: 500px;
    color: black;
    font-size: 16px;
    height: 60px;
`;
