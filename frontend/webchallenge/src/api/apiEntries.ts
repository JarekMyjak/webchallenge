import {apiGet, apiPost} from './apiMethods';

export interface Entry {
    id: string;
    challengeId: string;
    userId: string;
    githubUrl: string;
    pagesUrl: string;
    description: string;
    likes: number;
    liked: boolean;
    comments: Comment[];
}

export interface Comment {
    id: string;
    userName: string;
    content: string;
    timeAdded: string;
    userId: string;
}

export const getEntries = async () => {
    const entriesArr = await apiGet(`/api/entries`).then(res => {
        return res.data as Entry[];
    });
    return entriesArr;
};

export const getEntriesByChallengeId = async (challengeId: string) => {
    const entriesArr = await apiGet(
        `/api/entries/challenge/${challengeId}`
    ).then(res => {
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

export const getEntryById = async (entryId: string) => {
    const entriesArr = await apiGet(`/api/entries/${entryId}`).then(res => {
        return res.data as Entry;
    });
    return entriesArr;
};

export const postLikeToEntry = async (entryId: string) => {
    const res = await apiPost(`/api/entries/${entryId}/like`, {}).then(
        res => {}
    );
};

export const postCommentToEntry = async (entryId: string, comment: string) => {
    const res = await apiPost(`/api/entries/${entryId}/comment`, {
        content: comment,
    }).then(res => {});
};

export const postDislikeToEntry = async (entryId: string) => {
    const res = await apiPost(`/api/entries/${entryId}/dislike`, {}).then(
        res => {}
    );
};

export const deleteEntryById = async (entryId: string) => {
    const res = await apiPost(`/api/entries/${entryId}/delete`, {}).then(
        res => {}
    );
};
