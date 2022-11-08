import { apiGet } from "./apiMethods";

export interface Challenge {
    id: string;
    title: string,
    description: string,
    tech: string,
    imageUrls: string[],
    blobUrl: string,
    downloads: number,
    // entries: number,
}

export const getChallenges = async () => {
    const challengeArr = await apiGet("/api/challenges").then(res => {
        console.log(res.data);
        return res.data as Challenge[];
    });
    return challengeArr;
};

