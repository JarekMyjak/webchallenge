import { apiGet, apiPost } from "./apiMethods";

export interface Entry {
    id: string,
    challengeId: string,
    userId: string,
    githubUrl: string,
    pagesUrl: string,
    comment: string,
    likes: number,
    liked: number,
}

export const getEntriesByChallengeId = async (challengeId: string) => {
    const entriesArr = await apiGet(`/api/entries/challenge/${challengeId}`).then(res => {
        return res.data as Entry[];
    });
    return entriesArr;
};

export const getEntriesByUserId = async (userId: string) => {
    const entriesArr = await apiGet(`/api/entries/user/${userId}`).then(res => {
        return res.data as Entry[];
    });
    return entriesArr;
};

export const postLikeToEntry = async (entryId: string) => {
    const res = await apiPost(`/api/entries/${entryId}/like`, {}).then(res => {});
}

export const postDislikeToEntry = async (entryId: string) => {
    const res = await apiPost(`/api/entries/${entryId}/dislike`, {}).then(res => {});
}
