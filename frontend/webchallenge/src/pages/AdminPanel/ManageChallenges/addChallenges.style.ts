import styled from 'styled-components';
import colors from '../../../helpers/colors.helpers';
import Select from 'react-select';

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
    small?: boolean;
}

export const FieldError = styled.div<IFieldError>`
    color: #a10803;
    font-size: 12px;
    height: 16px;
    z-index: 1;
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

export const CustomInputText = styled.input<IFieldError>`
    margin-top: 4px;
    box-sizing: border-box;
    width: 500px;
    height: 50px;
    font-size: 20px;
    background-color: ${colors.backgroundSecondary};
    border: none;
    border-radius: 3px;
    transition: 0.2s;
    padding-left: 5px;
    z-index: 2;
    color: white;
    border-left: 2px solid
        ${p => (!p.error ? colors.backgroundSecondary : '#a10803')};
    &:focus {
        outline: none;
        border-left: 2px solid ${colors.orange};
    }
`;
export const CustomTextArea = styled.textarea<IFieldError>`
    margin-top: 4px;
    box-sizing: border-box;
    min-width: 500px;
    min-height: ${p => (p.small ? '100px' : '200px')};;
    max-width: 500px;
    max-height: 250px;
    font-size: 12px;
    background-color: ${colors.backgroundSecondary};
    border: none;
    border-radius: 3px;
    transition: 0.2s;
    padding-left: 5px;
    z-index: 2;
    color: white;
    border-left: 2px solid
        ${p => (!p.error ? colors.backgroundSecondary : '#a10803')};
    &:focus {
        outline: none;
        border-left: 2px solid ${colors.orange};
    }
`;

export const CustomFile = styled.input`
    /* display: none; */
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

export const FileButton = styled.div<IFieldError>`
    box-sizing: border-box;
    width: 200px;
    height: 50px;
    font-size: 16px;
    overflow: hidden;
    padding: 0;
    color: black;
    background-color: ${p => (p.error ? '#8a1111' : `${colors.orange}`)};
    border: 2px solid ${p => (p.error ? `#8a1111` : `${colors.orange}`)};
    display: flex;
    align-items: center;
    text-align: center;
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

export const CustomSelect = styled(Select)`
    margin-top: 4px;
    .Select-menu-outer {
        z-index: 999 !important;
    }
`;
