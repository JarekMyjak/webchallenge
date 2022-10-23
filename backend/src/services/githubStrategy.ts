import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as GithubStrategy } from "passport-github2"
import User from '../models/user';


const serverUrl = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV;
const env = process.env;
const GITHUB_CLIENT_ID = env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = env.GITHUB_CLIENT_SECRET;

const githubLogin = new GithubStrategy(
  {
    clientID: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
	callbackURL: "http://localhost:3030/auth/github/callback",
    scope: ['user:email'],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const oldUser = await User.findOne({ email: profile.emails[0].value });
        console.log("profile: ",profile);
      if (oldUser) {
        return done(null, oldUser);
      }
    } catch (err) {
      console.log(err);
    }

    try {
      const newUser = await new User({
        provider: 'github',
        githubId: profile.id,
        username: `user${profile.id}`,
        email: profile.emails[0].value,
        name: profile.username,
        avatar: profile.photos[0].value,
      }).save();
      done(null, newUser);
    } catch (err) {
      console.log(err);
    }
  },
);

passport.use(githubLogin);