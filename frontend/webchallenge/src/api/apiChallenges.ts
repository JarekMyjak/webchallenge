import {ApiBaseUrl, apiGet} from './apiMethods';

export interface Challenge {
    id: string;
    title: string;
    description: string;
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
    ApiBaseUrl;
    return `${ApiBaseUrl}/api/challenges/${challengeId}/download`;
};
