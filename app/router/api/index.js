const express = require('express');
const authController = require('../../controllers/authController');
const userController = require('../../controllers/userController');
const gameController = require('../../controllers/gameController');
const auth = require('../../middlewares/auth');


const router = express.Router();

router.get('/users', userController.getAll);

// user routes, meant for admin, we need to authenticate and authorization
router
   .route('/users/:id')
   .get(userController.getOne)
   .delete(userController.delete)
   .patch(userController.update);

// Register
router.post('/register', userController.create);

// Login
router.post("/login", authController.login);

// Profile
router.get('/profile/:id', auth, userController.getOne);

// New game creation
router.post('/createNewGame', gameController.createNewGame);

// Access game created
router
   .route('/game/:id')
   .get(gameController.getOne)
   // The following route is meant to update the current with game with all the data needed to start a game
   .post(gameController.deployGame);

module.exports = router;