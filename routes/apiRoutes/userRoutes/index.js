const router = require('express').Router();
const {
  findAllUsersApi,
  findUserByIdApi,
  createUserApi,
} = require('../../../controllers/userController');
// /api/users

router.route('/')
  .get(findAllUsersApi)
  .post(createUserApi);

// /api/users/:userId

router.route('/:userId')
  .get(findUserByIdApi)


module.exports = router;
