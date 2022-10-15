import { env } from "process";

// src/token.js
const jwt = require('jsonwebtoken');
// const config = require('./config');

const isProduction = process.env.NODE_ENV === 'production';
const secret = isProduction ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET_DEV;



// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
  // How long will the token be valid for
  const expiresIn = '12 hour';
  // Which service issued the token
//   const issuer = config.get('authentication.token.issuer');
  // Which service is the token intended for
//   const audience = config.get('authentication.token.audience');
  // The signing key for signing the token
//   const secret = config.get('authentication.token.secret');

  const token = jwt.sign({}, secret, {
    expiresIn: expiresIn,
    // audience: audience,
    // issuer: issuer,
    subject: userId.toString()
  });

  return token;
}

export default generateAccessToken;