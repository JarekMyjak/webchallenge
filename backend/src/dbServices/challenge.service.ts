import { IChallenge, challengeCollection, sanitizeChallenge, IChallengeDocument } from "../schemas/challenge.schema";

const challengeService = {
    getAllChallenges: async (): Promise<IChallenge[] | null> => {
        const challenges = await challengeCollection.find({});
        return challenges.map((challenge) => sanitizeChallenge(challenge))
        // return challenge ? sanitizeChallenge(challenge) : null;
    },

    getChallengeById: async (uniqueUrl: string): Promise<IChallenge | null> => {
        const challenge = await challengeCollection.findOne({ });
        return challenge ? sanitizeChallenge(challenge) : null;
    },

    createTestChallenge: async (): Promise<IChallenge | null> => {
        const challenge: IChallengeDocument = await challengeCollection.create({
            id: "string",
            title: "string",
            githubLink: "string",
            timeCreated: new Date
        });
        return challenge ? sanitizeChallenge(challenge) : null;
    },
}

export default challengeService;