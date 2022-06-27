const express = require('express');
const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');
const gameController = require('../../controllers/gameController');
const cardController = require('../../controllers/cardController');


const websiteController = require('../../controllers/websiteController');

const router = express.Router();

//For the MVP we will use PG Admin

module.exports = router;