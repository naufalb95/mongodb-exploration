const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const ItemController = require('../controllers/itemController');

const { errorHandler } = require('../middlewares');

router.get('/users', UserController.getAllUser);

router.get('/items', ItemController.getAllItems);

router.get('/categories', ItemController.getCategories);

router.use(errorHandler);

module.exports = router;
