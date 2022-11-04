const router = require('express').Router();
const { route } = require('./api');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;
