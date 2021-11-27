const { Item } = require('../models');

class ItemController {
  static getAllItems = async (req, res, next) => {
    try {
      const items = await Item.findAllItems();

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

  static getItemByCategory = async (req, res, next) => {
    try {
      const { categoryName } = req.params;

      const items = await Item.findItemByCategory(categoryName);

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = ItemController;
