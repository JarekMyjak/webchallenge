import { apiGet } from "./apiMethods";

export interface Challenge {
    title: string,
    description: string,
    imageUrls: string[],
    blobUrl: string,
}

export const getChallenges = async () => {
    const challengeArr = await apiGet("/api/challenges").then(res => {
        console.log(res.data);
        return res.data as Challenge[];
    });
    return challengeArr;
};

