import { Router } from 'express';

import requireAdmin from '../../middleware/requireAdmin';
import Challenge, { challengeType } from '../../models/challenge';


const router = Router();

router.post('/', requireAdmin, async (req, res) => {
    const newChallenge = await new Challenge({
        title: "test",
        description: "**Test**",
        imageUrls: [],
        blobUrl: "url"
    }).save();
    console.log(newChallenge.toJSON());
    res.send({ challenge: newChallenge.toJSON })

});

router.get('/', async (req, res) => {
    const challenges = await Challenge.find().sort({ createdAt: 'desc' });
    const resChallenges = challenges.map((c) => c.toJSON())
    console.log(resChallenges);

    res.send({ challenges: resChallenges })
});

export default router;
