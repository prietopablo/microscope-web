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

// // Game creation routes
// router.post('/game', gameController.createGame);

// // Game archive
// router.get('/archive');
// router.get('/archive/:id');

// // Contact
// router.get('/contact');

module.exports = router;
