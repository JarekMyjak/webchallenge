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
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });

		const challengeId = req.params["id"]

		const newEntry = await new Entry({
			challengeId: ObjectId(challengeId),
			userId: user._id,
			githubUrl: req.body.githubUrl,
			pagesUrl: req.body.pagesUrl,
			description: req.body.description,
		}).save();
		res.send(newEntry);
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

router.get('/', requireJwtAuth, async (req, res) => {
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });
		const entries = await Entry.find({});
		const resEntries = entries.map(entry => entry.userJSON(user.id));
		res.send(resEntries)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

router.get('/challenge/:id', requireJwtAuth, async (req, res) => {
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });
		const entries = await Entry.find({ challengeId: req.params["id"] });
		const resEntries = entries.map(entry => entry.userJSON(user.id));
		res.send(resEntries)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

router.get('/user/:id', requireJwtAuth, async (req, res) => {
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });
		const entries = await Entry.find({ userId: req.params["id"] });
		const resEntries = entries.map(entry => entry.userJSON(user.id));
		res.send(resEntries)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

router.get('/:id', requireJwtAuth, async (req, res) => {
	const userEntry = req.user as userType;
	const user = await User.findOne({ githubId: userEntry.githubId });
	const entry = await Entry.findById(req.params["id"]);
	const resEntry = entry.userJSON(user.id);
	res.send(resEntry)
});

router.post('/:id/like', requireJwtAuth, async (req, res) => {
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });
		await Entry.findByIdAndUpdate(req.params.id, { $addToSet: { likedUserIds: user.id } })

		res.sendStatus(200);
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

router.post('/:id/dislike', requireJwtAuth, async (req, res) => {
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });
		const entry = await Entry.findByIdAndUpdate(req.params.id, { $pull: { likedUserIds: user.id } })

		res.sendStatus(200);
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

router.post('/:id/comment', requireJwtAuth, async (req, res) => {
	try {
		const userEntry = req.user as userType;
		const user = await User.findOne({ githubId: userEntry.githubId });
		const newComment = { userId: user.id, userName: user.username, content: req.body.content }
		const entry = await Entry.findByIdAndUpdate(req.params.id, { $push: { comments: newComment } })
		res.sendStatus(200);
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: error.message });
	}
});

export default router;
