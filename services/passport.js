const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const {
  comparePassword,
  findUserByUsernameFromDb,
} = require('../model/userOrm');

const localStrategy = new LocalStrategy(async (username, password, done) => {
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
  }

//  Follow this convention
//   Given the proper credentials
//   find a user in your database with those credentials
//  if u find a user, then call done with a user
//   else call done with an error or false

//   If done is called with a user, it will attach the user to req.user on the next request

});

