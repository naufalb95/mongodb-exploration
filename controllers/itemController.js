const { Item } = require('../models');

class ItemController {
  static getAllItems = async (req, res, next) => {
    try {
      const { category } = req.query;
      const items = await Item.findAllItems({ category });

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  static getCategories = async (req, res, next) => {
    try {
      const items = await Item.findCategories();

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ItemController;
