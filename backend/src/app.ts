import 'dotenv/config'
import express from 'express';
import mongoose from 'mongoose';
import routes from './v1/routes/routes';

const env = process.env;

const app = express();
const port = env.PORT || 3000;

mongoSetup().catch(err => console.log(err));

async function mongoSetup() {
  await mongoose.connect('mongodb://127.0.0.1:27017/webchallenge');
}
mongoose.connection.on('open', info => {
  console.log('mongoDB connection open ', info ? info : "");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/v1', routes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});