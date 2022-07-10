import { NextFunction, Request, Response } from 'express';
import challengeService from '../dbServices/challenge.service';

export const getChallenge = async (req: Request, res: Response): Promise<void> => {
	const result = await challengeService.getAllChallenges();
	res.send(result);
	return;
};

export const postChallenge = async (req: Request, res: Response): Promise<void> => {
	const result = await challengeService.createTestChallenge();
	res.send(result);
	return;
};