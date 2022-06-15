const express = require('express');
const authController = require('../../controllers/api/authController');
const userController = require('../../controllers/api/userController');
//const cardController = require('../../controllers/api/cardController');
const auth = require('../../middlewares/auth');


const router = express.Router();

router.get('/users', userController.getAll);

// user routes
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

// period routes
//router.post('/periods', cardController.createPeriod)

module.exports = router;