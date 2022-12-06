import {ApiBaseUrl, apiGet} from './apiMethods';
import {redirect} from 'react-router-dom';

export interface Challenge {
    id: string;
    title: string;
    description: string;
    details: string;
    tech: string;
    experience: 'advanced' | 'beginner' | 'intermediate';
    imageUrls: string[];
    blobUrl: string;
    downloads: number;
}

export const getChallenges = async () => {
    const challengeArr = await apiGet('/api/challenges').then(res => {
        console.log(res.data);
        return res.data as Challenge[];
    });
    return challengeArr;
};

export const getChallenge = async (challengeId: string) => {
    const challenge = await apiGet(`/api/challenges/${challengeId}`).then(
        res => {
            console.log(res.data);
            return res.data as Challenge;
        }
    );
    return challenge;
};

export const downloadChallengeUrl = (challengeId: string) => {
    return `${ApiBaseUrl}/api/challenges/${challengeId}/download`;
};

export const getPremiumChallenge = async (challengeId: string) => {
    const fileUrl = await apiGet(`/api/challenges/${challengeId}/premium`).then(
        res => res.data
    );
    return fileUrl as string;
};
