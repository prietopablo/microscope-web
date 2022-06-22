const express = require('express');
const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');
const gameController = require('../../controllers/gameController');
const cardController = require('../../controllers/cardController');
const auth = require('../../middlewares/auth');

const websiteController = require('../../controllers/websiteController');

const router = express.Router();

// homePage
router.get('/', websiteController.homePage);

// Register
router.post('/register', userController.create);

// Login
router.post("/login", authController.login);

// Profile
router
   .route('/profile/:id')
   .get(auth, userController.getOne)
   .patch(auth, userController.update)
   .delete(auth, userController.delete)

<<<<<<< HEAD
// Check token validity
router.post('/tokenValidity', authController.verifyToken);

// Logout, check what solution front dev have
router.post("/logout", auth, authController.logout);
=======
// Logout happen on the client side
>>>>>>> back_game_creation

// Will not implement auth for testing purposes
// New game creation
router.post('/createNewGame', auth, gameController.createNewGame);

// When a game is created, user needs to be redirected to the game page/tabletop with :id
router
   .route('/game/:id')
   .get(gameController.getOne)
   // The following route is meant to update the current with game with all the data needed to start a game
   .post(gameController.deployGame)
   // Players can create new card
   .post(/*gameController.createCard*/)
   // Finishing game where you can choose to update state to "finished" or "archived"
   .post(/*gameController.finishGame*/);

// When a game is created, the creator will be redirected to this route
// They will be able to share the url with other connected players
router
   .route('/game/:id')
   .get(gameController.getOne)
   // The following route is meant to update the current with game with all the data needed to start a game
   .patch(gameController.deployGame)

   .post(cardController.createCard)

// Game archive
// response need to send game.id, game.bigpicture of *, access all the game with state "archived"
router.get('/archive');
// response need to send all the game, all the cards, all the data related to the game with :id
router.get('/archive/:id');

// Contact
router
   .route('/contact')
   .get() // we should just display a contact with a dedicated email first
   .post(); // Then maybe we should try a contact relation related to the user. Use website controller

module.exports = router;
