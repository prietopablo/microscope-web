const express = require('express');

const userController = require('../../controllers/api/userController');
//const authenticationController = require('../../controllers/authenticationController');

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
//app.post("/login", authenticationController.login);

module.exports = router;