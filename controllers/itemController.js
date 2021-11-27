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
}

module.exports = ItemController;
