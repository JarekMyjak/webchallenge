import { Router } from 'express';
import User, { userType, userTypeMethods } from '../../models/user';

import requireJwtAuth from '../../middleware/requireJwtAuth';


const router = Router();

router.get('/me', requireJwtAuth, async (req, res) => {
	const userEntry = req.user as userType & userTypeMethods;
	res.json(userEntry.toJSON());
});

router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ message: 'No user found.' });
		res.json({ user: user.toJSON() });
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
});

router.get('/', async (req, res) => {
	try {
		const users = await User.find().sort({ createdAt: 'desc' });

		res.json({
			users: users.map((m) => {
				return m.toJSON();
			}),
		});
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong.' });
	}
});


export default router;