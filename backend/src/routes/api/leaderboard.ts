import { Router } from 'express';
import { upload } from '../../middleware/multer';

import requireAdmin from '../../middleware/requireAdmin';
import requireJwtAuth from '../../middleware/requireJwtAuth';
import Challenge, { challengeType } from '../../models/challenge';
import Entry from '../../models/entry';
import User, { userType } from '../../models/user';
const { ObjectId } = require('mongodb');

const router = Router();

router.get('/', async (req, res) => {
    const entries = await Entry.aggregate(
        [
            { $project: { 'userId': 1, 'likes': { '$size': '$likedUserIds', } } },
            { $group: { _id: "$userId", likes: { $sum: '$likes' } } },
        ]
    )
    .limit(5)
    .sort({ 'likes': -1 })
    .exec();

    Promise.all(entries.map(async entry => {
        const user = await User.findById(entry._id);
        return { user: user.toJSON(), likes: entry.likes }
    }))
    .then((resArr) => res.send(resArr))
    .catch((err) => res.status(500).send("internal server error"))
    // res.send(result);
});


export default router;
