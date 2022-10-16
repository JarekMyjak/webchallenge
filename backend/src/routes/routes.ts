import express from 'express';
import localAuthRoutes from './localAuth';
import githubAuthRoutes from './githubAuth';
import apiRoutes from './api';

const router = express.Router();

// Health page route.
router.get('/health', function (req, res) {
  res.status(200).send({ date: new Date().toISOString(), status: 'live' });
})

router.use('/auth', localAuthRoutes);
router.use('/auth', githubAuthRoutes);
router.use('/api', apiRoutes);
// fallback 404
router.use('/api', (req, res) => res.status(404).json('No route for this path'));

export default router;