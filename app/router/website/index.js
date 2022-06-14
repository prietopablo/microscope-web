const express = require('express');

const router = express.Router();
const websiteController = require('../../controllers/website/WebsiteController');


router.get('/', websiteController.homePage);



module.exports = router;