import passport from 'passport';
// import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as GithubStrategy } from "passport-github2"
import User from '../models/user';


const serverUrl = process.env.NODE_ENV === 'production' ? process.env.SERVER_URL_PROD : process.env.SERVER_URL_DEV;
const env = process.env;
const GithubClientId = env.AUTH_GITHUB_CLIENT_ID;
const GithubClientSecret = env.AUTH_GITHUB_CLIENT_SECRET;
const ApiBaseUrl = env.API_BASE_URL;

const githubLogin = new GithubStrategy(
	{
		clientID: GithubClientId,
		clientSecret: GithubClientSecret,
		callbackURL: `${ApiBaseUrl}/auth/github/callback`,
		scope: ['user:email'],
	},
	async (accessToken, refreshToken, profile, done) => {
		try {
			const existingUser = await User.findOne({ email: profile.emails[0].value });
			console.log("profile: ", profile);
			if (existingUser) {
				return done(null, existingUser);
			}
		} catch (err) {
			console.log(err);
		}

		try {
			const newUser = await new User({
				provider: 'github',
				githubId: profile.id,
				username: profile.username,
				email: profile.emails[0].value,
				githubName: profile.username,
				avatar: profile.photos[0].value,
				bio: "",
				city: "",
				website: "",
				linkedIn: "",
				github: profile.profileUrl,
				premium: false,
			}).save();
			done(null, newUser);
		} catch (err) {
			console.log(err);
		}
	},
);

passport.use(githubLogin);