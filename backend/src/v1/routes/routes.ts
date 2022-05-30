import express from 'express';
import { getChallenge, postChallenge } from '../controllers/challenges.controller';
import { sanitizeChallenge } from '../schemas/challenge.schema';
const routes = express.Router();

// Health page route.
routes.get('/health', function (req, res) {
  res.status(200).send({ date: new Date().toISOString(), status: 'live' });
})

// Home page route.
routes.get('/test', (req, res) => {
  getChallenge(req, res);
})
// Post
routes.post('/test', function (req, res) {
  postChallenge(req, res)
})

export default routes;