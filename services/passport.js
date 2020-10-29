const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


const {
  comparePassword,
  findUserByUsernameFromDb,
  findUserByIdFromDb,
} = require('../model/userOrm');

const localStrategy = new LocalStrategy(async (username, password, done) => {
  //  Follow this convention
//   Given the proper credentials
//   find a user in your database with those credentials
//  if u find a user, then call done with a user
//   else call done with an error or false
//   If done is called with a user, it will attach the user to req.user on the next request
  let user;
  try {
    user = await findUserByUsernameFromDb(username);
  } catch (e) {
    return done(e, null);
  }
  if (!user) {
    return done(null, false);
  } else {
    const doesPasswordMatch = await comparePassword(password, user.password);

    if (doesPasswordMatch) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  }
});


// Jwt Strategy is used for making sure that someone who is making the request
// is logged in
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'password',
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (jwtToken, done) => {
//   { sub: 'someUsersId', iat: 12685313131 }
  let user;
  try {
    user = await findUserByIdFromDb(jwtToken.sub);
  } catch (e) {
    return done(e, null);
  }
  if (!user) {
    return done(null, false);
  } else {
    return done(null, user);
  }
});

// Hey when someone says passport.authenticate('local')
// use this strategy right here
// this is only used for users who are signing in
passport.use(localStrategy);
// Hey when someone says passport.authenticate('jwt')
// use this strategy right here
//this is used for ensuring that there's a logged in user that's making the request
passport.use(jwtStrategy);
