const express = require('express');
const authController = require('../../controllers/api/authController');
const userController = require('../../controllers/api/userController');


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

module.exports = router;