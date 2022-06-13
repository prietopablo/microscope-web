const express = require('express');

const mainController = require('./controllers/mainController');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/users', userController.getAll);

router
   .route('/users/:id')
   .get(userController.getOne)
   .delete(userController.delete)
   .patch(userController.update);

router.post('/register', userController.create);

module.exports = router;