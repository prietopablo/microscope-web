const express = require('express');
const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');
const gameController = require('../../controllers/gameController');
const cardController = require('../../controllers/cardController');


const websiteController = require('../../controllers/websiteController');

const authAdmin = require('../../middlewares/authAdmin');

const router = express.Router();

//For the MVP we will use PG Admin
router.get("/games", authAdmin, gameController.getAll);

router.get("/games/:id", authAdmin, gameController.getOne);

router.get("/users", authAdmin, userController.getAll);

router.get("/users", authAdmin, userController.getOne);
module.exports = router;