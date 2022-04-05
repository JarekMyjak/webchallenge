import express from 'express';
const routes = express.Router();

// Home page route.
routes.get('/health', function (req, res) {
  res.status(200).send({date: new Date().toISOString(), status: 'live'});
})

export default routes;