const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const ItemController = require('../controllers/itemController');
const CartController = require('../controllers/cartController');

const { errorHandler } = require('../middlewares');

router.get('/users', UserController.getAllUser);

router.get('/items', ItemController.getAllItems);

router.get('/items/counts', ItemController.getItemCounts);

router.get('/items/stocks', ItemController.getItemStocks);

router.get('/items/high_price', ItemController.getItemHighestPrice);

router.get('/items/low_price', ItemController.getItemLowestPrice);

router.get('/categories', ItemController.getCategories);

router.get(
  '/categories/prices/average',
  ItemController.getAverageItemStockByCategory
);

router.get('/carts', CartController.getAllCarts);

router.get('/carts/count', CartController.countCarts);

router.use(errorHandler);

module.exports = router;
