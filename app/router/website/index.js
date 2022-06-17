const express = require('express');
const authController = require('../../controllers/api/authController');
const userController = require('../../controllers/api/userController');
const gameController = require('../../controllers/api/gameController');
const auth = require('../../middlewares/auth');

const websiteController = require('../../controllers/website/WebsiteController');

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
   .delete(auth, userController.delete);

// Logout, check what solution front dev have
router.post("/logout", auth, authController.logout);

// New game creation
router.post('/createNewGame', gameController.createNewGame);

// Game archive
router.get('/archive');
router.get('/archive/:id');

// Contact
router
   .route('/contact')
   .get()
   .post();

module.exports = router;
