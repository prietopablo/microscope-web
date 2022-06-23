const express = require('express');
// Controllers
const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');
const gameController = require('../../controllers/gameController');
const websiteController = require('../../controllers/websiteController');
const cardController = require('../../controllers/cardController');
// Middlewares
const authUser = require('../../middlewares/authUser');
const authGame = require('../../middlewares/authGame');
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
router.post('/register', userController.create);

// Login
router.post('/login', authController.login);

//-------------Member------------->
// Profile
router
   .route('/profile/:id')
   .get(authUser, userController.getOne)
   .patch(authUser, userController.update)
   .delete(authUser, userController.delete);

// Logout occurs in front

//Verify logged in
router.post('/verifsignin', authController.verifyToken);

// New game creation
router.post('/createNewGame', authUser, gameController.createNewGame);

// Send starting game data
// The following route is meant to update the current with game with all the data needed to start a game
router.post('/game/:id/starting', /*authUser,*/ gameController.deployGame);

// Access game & refresh
router
   .route('/game/:id/ongoing')
   .get(authGame, gameController.getOne)
   .post(authGame, cardController.createCard);

// Finish game
//..................TODO

module.exports = router;