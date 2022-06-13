const express = require('express');
const app = require('.');

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');
const authenticationController = require('./controllers/authenticationController');

const router = express.Router();

router.get('/', mainController.homePage);

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
app.post("/login", authenticationController.login);

module.exports = router;