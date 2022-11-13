import { Console } from 'console';
import { Router } from 'express';
import { upload } from '../../middleware/multer';

import requireAdmin from '../../middleware/requireAdmin';
import requireJwtAuth from '../../middleware/requireJwtAuth';
import Challenge, { challengeType } from '../../models/challenge';
import Entry from '../../models/entry';
import User, { userType } from '../../models/user';
const { ObjectId } = require('mongodb');

const router = Router();

router.post('/challenge/:id', requireJwtAuth, async (req, res) => {
    const userEntry = req.user as userType;
    const user = await User.findOne({ githubId: userEntry.githubId });

    const challengeId = req.params["id"]

    const newEntry = await new Entry({
        challengeId: ObjectId(challengeId),
        userId: user._id,
        githubUrl: req.body.githubUrl,
        pagesUrl: req.body.pagesUrl,
        comment: req.body.comment,
    }).save();
});

router.get('/challenge/:id', requireJwtAuth, async (req, res) => {
    const userEntry = req.user as userType;
    const user = await User.findOne({ githubId: userEntry.githubId });
    const entries = await Entry.find({ challengeId: req.params["id"]});
    const resEntries = entries.map(entry => entry.userJSON(user.id));
    res.send(resEntries)
});

router.get('/user/:id', async (req, res) => {
    const entries = await Entry.find({userId: req.params["id"]});
    const resEntries = entries.map(entry => entry.toJSON());
    res.send(resEntries)
});

router.post('/:id/like', requireJwtAuth, async (req, res) => {
    const userEntry = req.user as userType;
    const user = await User.findOne({ githubId: userEntry.githubId });
    const entry = await Entry.findByIdAndUpdate(req.params.id, {$addToSet: {likedUserIds: user.id}})

    res.sendStatus(200);
});

router.post('/:id/dislike', requireJwtAuth, async (req, res) => {
    const userEntry = req.user as userType;
    const user = await User.findOne({ githubId: userEntry.githubId });
    const entry = await Entry.findByIdAndUpdate(req.params.id, {$pull: {likedUserIds: user.id}})

    res.sendStatus(200);
});

export default router;
