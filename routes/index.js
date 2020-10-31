const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');
// '/'
// prepending /api to everything declared after apiRoutes
router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

module.exports = router;
