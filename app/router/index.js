const express = require('express');

const routerApi = require('./api');
const routerAdmin = require('./admin');

const router = express.Router();


router.use('/api', routerApi);
router.use('/admin', routerAdmin);

module.exports = router;