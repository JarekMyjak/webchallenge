import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/user';



const isProduction = process.env.NODE_ENV === 'production';
const secretOrKey = isProduction ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET_DEV;

const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey,
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.sub);

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  },
);

passport.use(jwtLogin);