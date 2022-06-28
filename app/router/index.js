const express = require('express');

const routerApi = require('./api');
const routerWebsite = require('./admin');

const router = express.Router();


router.use('/api', routerApi);
router.use('/', routerWebsite);

module.exports = router;