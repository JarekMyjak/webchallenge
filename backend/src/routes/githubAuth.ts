import { Router } from 'express';
import passport from 'passport';
import generateAccessToken from '../services/token';

const router = Router();
// type extendedRequest = Request & {
//     user: {generateJWT: () => {}}
// }

function generateUserToken(req, res) {
    const accessToken = generateAccessToken(req.user.id);
    res.redirect(`http://localhost:3000/authhandler?jwt=${accessToken}`);
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