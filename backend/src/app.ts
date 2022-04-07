import 'dotenv/config' 
import express from 'express';
import routes from './v1/routes';

const env = process.env;

const app = express();
const port = env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/v1', routes)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});