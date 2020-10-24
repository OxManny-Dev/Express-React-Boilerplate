const {
  findAllUsersFromDb,
  insertUserToDb,
} = require('../model/userOrm');

module.exports = {
  findAllUsersApi: async (req, res) => {
    try {
      const users = await findAllUsersFromDb();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  },
  findUserByIdApi: async (req, res) => {
    const {userId} = req.params;
    console.log(userId);
  },
  createUserApi: async (req, res) => {
    //   any time user is sending data through a form
    //   we can pull that data out from the req.body object
    const {username, password} = req.body;
    try {
      const newUser = await insertUserToDb(username, password);
      res.json(newUser);
    } catch (e) {
      res.status(400).json(e);
    }
  },
}
