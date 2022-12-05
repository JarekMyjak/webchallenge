import {ApiBaseUrl, apiGet} from './apiMethods';
import { redirect } from "react-router-dom";
import { user } from './useAuth';

export interface LeaderboardEntry {
    user: user,
    likes: number
}

export const getLeaderboard = async () => {
    const challengeArr = await apiGet('/api/leaderboard').then(res => {
        // console.log(res.data);
        return res.data as LeaderboardEntry[];
    });
    return challengeArr;
};