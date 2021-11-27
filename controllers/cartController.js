const { Cart } = require('../models');

class CartController {
  static getAllCarts = async (req, res, next) => {
    try {
      const carts = await Cart.findAllCarts();

      res.status(200).json(carts);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  static countCarts = async (req, res, next) => {
    try {
      const carts = await Cart.countCarts();

      res.status(200).json(carts);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}

module.exports = CartController;
