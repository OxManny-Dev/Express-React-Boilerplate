const {
  insertUserToDb,
} = require('../model/userOrm');
const jwt = require('jsonwebtoken');

const tokenForUser = (userId) => {
  return jwt.sign({
    sub: userId,
    iat: new Date().getTime(),
  }, 'asidug apuygdauysgdasd');
}

module.exports = {
  signUpApi: async (req, res) => {
  //   given a username and password
  //   create a user out of it
  //   and when a user is created, give them back a token
  }
}
