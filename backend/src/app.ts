import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';
import passport from 'passport';
import cors from 'cors';


const env = process.env;

const app = express();
const port = env.PORT || 3030;
const mongoConnectionString = env.MONGODBURL;
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
require('./services/jwtStrategy');
// require('./services/facebookStrategy');
require('./services/githubStrategy');
// require('./services/localStrategy');

async function mongoSetup() {
	await mongoose.connect(mongoConnectionString);
}
mongoSetup().catch(err => console.log(err));

mongoose.connection.on('open', info => {
	console.log('mongoDB connection open ', info ? info : "");
});

app.get('/', (req, res) => {
	res.send(`<h1>hello user ${req.user}<h1>`);
});

app.use('/', routes)

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});