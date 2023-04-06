const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Invalid route! It is not yet defined.'));

module.exports = router;
