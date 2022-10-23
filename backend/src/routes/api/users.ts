import { Router } from 'express';
import User, { userType } from '../../models/user';

import requireJwtAuth from '../../middleware/requireJwtAuth';


const router = Router();

router.get('/me', requireJwtAuth, async (req, res) => {
    const userEntry = req.user as userType;
    const me = {
        name: userEntry.name,
        avatar: userEntry.avatar,
        role: userEntry.role,
    }
    res.json(me);
});

router.get('/:username', requireJwtAuth, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) return res.status(404).json({ message: 'No user found.' });
    res.json({ user: user.toJSON() });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

router.get('/', requireJwtAuth, async (req, res) => {
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

// router.delete('/:id', requireJwtAuth, async (req, res) => {
//   try {
//     const tempUser = await User.findById(req.params.id);
//     if (!tempUser) return res.status(404).json({ message: 'No such user.' });
//     if (!(tempUser.id === req.user.id || req.user.role === 'ADMIN'))
//       return res.status(400).json({ message: 'You do not have privilegies to delete that user.' });

//     // if (['email0@email.com', 'email1@email.com'].includes(tempUser.email))
//     //   return res.status(400).json({ message: 'You can not delete seeded user.' });

//     //delete all messages from that user
//     await Message.deleteMany({ user: tempUser.id });
//     //delete user
//     const user = await User.findByIdAndRemove(tempUser.id);
//     res.status(200).json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Something went wrong.' });
//   }
// });

export default router;