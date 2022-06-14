const express = require('express');

const routerApi = require('./api');
const routerWebsite = require('./website');

const router = express.Router();


router.use('/api', routerApi);
router.use('/', routerWebsite);

module.exports = router;