import mongoose, { Schema } from "mongoose";

export const ChallengesColectionName = "Challenges";

const challengeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true
    },
    timeCreated: {
        type: Date,
        required: true
    },
});

export interface IChallenge {
    id: string,
    title: string,
    githubLink: string,
    timeCreated: Date
}

export const challengeCollection = mongoose.model(ChallengesColectionName, challengeSchema);

export interface IChallengeDocument extends IChallenge, Document { }

export const sanitizeChallenge = (challengeDocument: IChallengeDocument): IChallenge => {
    return {
        id: challengeDocument.id,
        title: challengeDocument.title,
        githubLink: challengeDocument.githubLink,
        timeCreated: challengeDocument.timeCreated
    }
}