const router = require('express').Router();
const {findAllUsersFromDb} = require('../../../model/userOrm');
// /api/users

router.route('/')
  .get(async (req, res) => {
    try {
      const users = await findAllUsersFromDb();
      res.json(users);
    } catch  (e) {
      res.status(400).json(e);
    }
  })


module.exports = router;
