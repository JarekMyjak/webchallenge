import { Router } from 'express';
import usersRoutes from './users';
import adminRoutes from './admin';
import challengesRoutes from './challenges';
import entriesRoutes from './entries';
import leaderboardRoutes from './leaderboard';
// import messagesRoutes from './messages';
const router = Router();

router.use('/users', usersRoutes);
router.use('/challenges', challengesRoutes);
router.use('/entries', entriesRoutes);
router.use('/admin', adminRoutes);
router.use('/leaderboard', leaderboardRoutes);

export default router;