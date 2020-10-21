const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
// /api/users
router.use('/api', apiRoutes);

module.exports = router;
