const express = require('express');
const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');
const gameController = require('../../controllers/gameController');
const websiteController = require('../../controllers/websiteController');
const cardController = require('../../controllers/cardController');

const auth = require('../../middlewares/auth');
const playerAccess = require('../../middlewares/playerAccess');


const router = express.Router();

//-------------Visitor------------->
// homePage
router.get('/', websiteController.homePage);

// archived games list
router.get('/archived', gameController.getAllArchived);

// archived game
router.get('/archived/:id', gameController.getOne);

// Sign up
router.post('/signup', userController.create);

// Login
router.post('/login', authController.login);

//-------------Member------------->
// Profile
router
   .route('/profile/:id')
   .get(auth, userController.getOne)
   .patch(auth, userController.update)
   .delete(auth, userController.delete);

// Logout occurs in front

//Verify logged in
router.post('/verifsignin', authController.verifyToken);

// New game creation
router.post('/createNewGame', auth, gameController.createNewGame);

// Send starting game data
// The following route is meant to update the current with game with all the data needed to start a game
router.post('/game/:id/starting', auth, gameController.deployGame);

// Access game & refresh
router
   .route('/game/:id/ongoing')
   .get(auth, playerAccess, gameController.getOne)
   .post(auth, playerAccess, cardController.createCard);

// Finish game
//..................TODO

module.exports = router;