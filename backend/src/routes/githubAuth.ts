import { Router } from 'express';
import passport from 'passport';
import generateAccessToken from '../services/token';

const FrontendBaseUrl = process.env.FRONTEND_BASE_URL;

const router = Router();

function generateUserToken(req, res) {
    const accessToken = generateAccessToken(req.user.id);
    res.redirect(`${FrontendBaseUrl}/authhandler?jwt=${accessToken}`);
}

router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['user:email'],
  }),
);

const clientUrl = process.env.NODE_ENV === 'production' ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV;

router.get(
  '/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/',
    session: false,
  }),
  generateUserToken
);

export default router;