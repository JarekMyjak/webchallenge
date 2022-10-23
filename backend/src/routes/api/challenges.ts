import { Router } from 'express';
import { upload } from '../../middleware/multer';

import requireAdmin from '../../middleware/requireAdmin';
import Challenge, { challengeType } from '../../models/challenge';

const router = Router();

type extendedFile = Express.Multer.File & {url: string}
router.post('/', requireAdmin, upload.any(), async (req, res) => {

    const fileArray = req.files as Array<extendedFile>;
    const urlArr = fileArray.map(file => file.url);
    
    const newChallenge = await new Challenge({
        title: req.body.title,
        description: req.body.description,
        imageUrls: urlArr.slice(1),
        blobUrl: urlArr[0]
    }).save();

    res.send({ challenge: newChallenge.toJSON() })

});

router.get('/', async (req, res) => {
    const challenges = await Challenge.find().sort({ createdAt: 'desc' });
    const resChallenges = challenges.map((c) => c.toJSON())

    res.send(resChallenges)
});

export default router;
