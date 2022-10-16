import { Router } from 'express';
import usersRoutes from './users';
import adminRoutes from './admin';
import challengesRoutes from './challenges';
// import messagesRoutes from './messages';
const router = Router();

router.use('/users', usersRoutes);
router.use('/challenges', challengesRoutes);
router.use('/admin', adminRoutes);

export default router;