import { Router } from 'express';
import passport from 'passport';

const router = Router();
type extendedRequest = Request & {
    user: {generateJWT: () => {}}
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
  (req, res) => {
    console.log('asdas  ')
    const token = req.user.generateJWT();
    res.cookie('x-auth-cookie', token);
    res.redirect("/");
  },
);

export default router;