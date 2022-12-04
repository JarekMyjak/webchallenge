import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../helpers/colors.helpers';
import TopSection from './TopSection';
import { useParams } from 'react-router-dom';
import {
	Challenge,
	downloadChallengeUrl,
	getChallenge,
} from '../../api/apiChallenges';
import { SubmitHandler, useForm } from 'react-hook-form';
import { apiPost } from '../../api/apiMethods';
import ClickAwayListener from 'react-click-away-listener';

interface Inputs {
	githubUrl: string;
	pagesUrl: string;
	description: string;
}

interface IEntryUploadPage {
	closeDialogHandler(): void;
	challenge: any;
}

const EntryUploadPage: React.FC<IEntryUploadPage> = props => {
	const { challengeId } = useParams();
	// const [challenge, setChallenge] = useState<Challenge | undefined>();

	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => {
		const res = apiPost(`/api/entries/challenge/${challengeId}`, data);
		console.log(challengeId);
		console.log(res);
		props.closeDialogHandler();
	};

	return (
		<ClickAwayListener onClickAway={props.closeDialogHandler}>
			{props.challenge && (
				<Wrapper
					onSubmit={e => {
						handleSubmit(onSubmit)(e).catch(err =>
							console.log(err)
						);
					}}
				>
					<h2>Upload challenge entry:</h2>
					<div>
						<CustomInputText
							placeholder='Repository url'
							type='text'
							id='challengeTitle'
							{...register('githubUrl')}
						/>
					</div>
					<div>
						<CustomInputText
							placeholder='Pages url'
							type='text'
							id='challengeTitle'
							{...register('pagesUrl')}
						/>
					</div>
					<div>
						<CustomTextArea
							placeholder='Description'
							id='challengeDescription'
							{...register('description')}
						/>
					</div>
					<SubmitButton type='submit'>Submit</SubmitButton>
				</Wrapper>
			)}
		</ClickAwayListener>
	);
};

export default EntryUploadPage;

const Wrapper = styled.form`
    transform: translateY(150px);
    width: 600px;
    height: 600px;
    background-color: ${colors.backgroundPrimary};
    box-sizing: border-box;
    padding: 10px 20px;
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    & h2 {
        color: white;
    }
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
