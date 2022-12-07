import { Router } from 'express';
import { removeUrlParams, upload } from '../../middleware/multer';

import requireAdmin from '../../middleware/requireAdmin';
import consoleLog from '../../middleware/consoleLog';
import Challenge, { challengeType } from '../../models/challenge';
import requireJwtAuth from '../../middleware/requireJwtAuth';
import User, { userType } from '../../models/user';

const router = Router();

type extendedFile = Express.Multer.File & { url: string }

router.post('/', requireAdmin, upload.any(), async (req, res) => {
	const fileArray = req.files as Array<extendedFile>;
	let fileUrl, premiumFileUrl, imageUrls = [];
	fileArray.forEach(file => {
		if (file.fieldname === "file") {
			fileUrl = removeUrlParams(file.url)
		}
		if (file.fieldname === "premiumFile") {
			premiumFileUrl = removeUrlParams(file.url)
		}
		if (file.fieldname === "images") {
			imageUrls.push(removeUrlParams(file.url))
		}
	});
	const newChallenge = await new Challenge({
		title: req.body.title,
		description: req.body.description,
		details: req.body.details,
		tech: req.body.tech,
		experience: req.body.experience,
		imageUrls: imageUrls,
		blobUrl: fileUrl,
		premiumBlobUrl: premiumFileUrl
	}).save();

	res.send({ challenge: newChallenge.toJSON() })

});

router.get('/', async (req, res) => {
	const challenges = await Challenge.find({}).sort({ createdAt: 'desc' });
	const resChallenges = challenges.map((c) => c.toJSON())
	res.send(resChallenges)
});

router.get('/:id', async (req, res) => {
	try {
		const challenge = await Challenge.findById(req.params["id"]);
		const resChallenge = challenge.toJSON();
		res.send(resChallenge)
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
});

router.post('/:id/delete', async (req, res) => {
	try {
		await Challenge.findByIdAndDelete(req.params["id"]);
		res.status(200).json({ message: 'Challenge deleted' })
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
});

router.get('/:id/download', async (req, res) => {
	const challenge = await Challenge.findOne({ _id: req.params["id"] });
	const blobUrl = challenge.blobUrl as string;
	challenge.updateOne({ $inc: { 'downloads': 1 } }).exec()
	res.redirect(blobUrl);
});

router.get('/:id/premium', requireJwtAuth, async (req, res) => {
	const userEntry = req.user as userType;
	const user = await User.findOne({ githubId: userEntry.githubId });
	if (user.premium === true) {
		const challenge = await Challenge.findOne({ _id: req.params["id"] });
		const premiumBlobUrl = challenge.premiumBlobUrl as string;
		res.send(premiumBlobUrl);
	} else {
		res.sendStatus(401);
	}
});

export default router;
