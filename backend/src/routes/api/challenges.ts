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
        tech: req.body.tech,
        difficulty: req.body.difficulty,
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

router.get('/:id', async (req, res) => {
    const challenge = await Challenge.findOne({_id: req.params["id"]});
    const resChallenge = challenge.toJSON();
    res.send(resChallenge)
});

router.get('/:id/download', async (req, res) => {
    const challenge = await Challenge.findOne({_id: req.params["id"]});
    const resUrl = challenge.blobUrl as string;
    challenge.update({$inc: {'downloads': 1}})
    const testUrl = "https://challengestore.blob.core.windows.net/challenges/test 2: reaktywacja/Im a test file.txt"
    res.redirect(testUrl);
});

export default router;
