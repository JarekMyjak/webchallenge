import 'dotenv/config'
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './v1/routes/routes';
import passport from 'passport';
require('./v1/auth/auth');

const env = process.env;

const app = express();
const port = env.PORT || 3000;
const mongoConnectionString = env.MONGODBURL;


async function mongoSetup() {
	await mongoose.connect(mongoConnectionString);
}
mongoSetup().catch(err => console.log(err));

mongoose.connection.on('open', info => {
	console.log('mongoDB connection open ', info ? info : "");
});

function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(401);
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github',
	passport.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function (req, res) {
		// Successful authentication, redirect home.
		res.redirect('/protected');
	});

app.get('/', (req, res) => {
	res.send('<a href="/auth/github">login<a>');
});

app.get('/protected', (req, res) => {
	res.send(`<h1>hello user ${req.isAuthenticated()}<h1>`);
});

// app.get('/logout', (req, res) => {
// 	req.logout();
// 	req.session.destroy();
// 	res.send('Goodbye!');
// });

app.use('/v1', routes)

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});