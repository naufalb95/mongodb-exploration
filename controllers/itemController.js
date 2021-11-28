const { Item } = require('../models');

class ItemController {
  static getAllItems = async (req, res, next) => {
    try {
      const { category, minStock, maxStock, minPrice, maxPrice } = req.query;
      const items = await Item.findAllItems({
        category,
        minStock,
        maxStock,
        minPrice,
        maxPrice
      });

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  static getItemCounts = async (req, res, next) => {
    try {
      const items = await Item.countItems();

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  static getItemStocks = async (req, res, next) => {
    try {
      const items = await Item.countItemStocks();

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  static getItemHighestPrice = async (req, res, next) => {
    try {
      const items = await Item.findItemHighestPrice();

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  static getItemLowestPrice = async (req, res, next) => {
    try {
      const items = await Item.findItemLowestPrice();

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  };

  static getAverageItemStockByCategory = async (req, res, next) => {
    try {
      const items = await Item.avgItemPriceCategory();

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
