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
    height: 500px;
    width: 800px;
    background-color: ${colors.backgroundPrimary};
    color: white;
    font-size: 32px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const CustomLabel = styled.label`
    display: inline-block;
    width: 200px;
    font-size: 24px;
    text-align: right;
    margin-right: 10px;
`;

export const CustomInputText = styled.input`
    box-sizing: border-box;
    width: 300px;
    height: 50px;
    font-size: 24px;
    background-color: ${colors.backgroundSecondary};
    border: none;
    border-radius: 3px;
    transition: 0.2s;
    padding-left: 5px;
    color: white;
    &:focus {
        outline: none;
        border-left: 2px solid ${colors.orange};
    }
`;

export const CustomFile = styled.input`
    border: 1px solid red;
    display: none;
`;

export const CustomFileLabel = styled.label`
    display: block;
    width: 100%;
    cursor: pointer;
`;

export const FileButton = styled.button`
    width: 200px;
    height: 50px;
    font-size: 16px;
    padding: 0;
    border: none;
    background-color: ${colors.orange};
    border-radius: 3px;
    padding: 10px 20px;
    cursor: pointer;
    transition: 0.2s;
    border: 2px solid ${colors.orange};
    &:hover,
    &:focus,
    &:focus-visible {
        outline: none;
        background-color: #c47000;
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
