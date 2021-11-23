const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const errorHandler = require('../middlewares/errorHandler');

router.get('/users', UserController.getAllUser);

router.use(errorHandler);

module.exports = router;
