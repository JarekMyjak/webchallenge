import passport from "passport";
const GitHubStrategy = require("passport-github2").Strategy;

const env = process.env;
const GITHUB_CLIENT_ID = env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = env.GITHUB_CLIENT_SECRET;

passport.use(new GitHubStrategy({
	clientID: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
	callbackURL: "http://localhost:3030/auth/github/callback",
	passReqToCallback: true,
},
	function (accessToken, refreshToken, profile, done) {
		// User.findOrCreate({ githubId: profile.id }, function (err, user) {
		//   return done(err, user);
		// });
		console.log("profile:",profile)
		return done(null, profile);
	}
));

passport.serializeUser((user, done)=>{
	console.log("serializaton user:",user)
	done(null, user);
})
passport.deserializeUser((user, done)=>{
	console.log("deserializaton user:",user)
	done(null, user);
})