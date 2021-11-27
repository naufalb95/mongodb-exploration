const { getDatabase } = require('../config/mongo');

class Item {
  static findAllItems = async (options) => {
    const filter = [];
    if (options.category) {
      filter.push({
        $match: { 'category.name': options.category }
      });
    }

    if (options.minStock) {
      filter.push({
        $match: { stock: { $gte: +options.minStock } }
      });
    }

    if (options.maxStock) {
      filter.push({
        $match: { stock: { $lte: +options.maxStock } }
      });
    }

    if (options.minPrice) {
      filter.push({
        $match: { price: { $gte: +options.minPrice } }
      });
    }

    if (options.maxPrice) {
      filter.push({
        $match: { price: { $lte: +options.maxPrice } }
      });
    }

    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category'
            }
          },
          ...filter,
          {
            $sort: { name: 1 }
          }
        ])
        .toArray();

      return items;
    } catch (err) {
      return err;
    }
  };

  static countItems = async () => {
    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $count: 'totalItems'
          }
        ])
        .toArray();

      return items[0];
    } catch (err) {
      return err;
    }
  };

  static countItemStocks = async () => {
    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $group: {
              _id: null,
              itemStocks: { $sum: '$stock' }
            }
          }
        ])
        .toArray();

      return items[0];
    } catch (err) {
      return err;
    }
  };

  static findItemHighestPrice = async () => {
    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $group: {
              _id: null,
              highestPriceItem: { $max: '$price' }
            }
          }
        ])
        .toArray();

      return items[0];
    } catch (err) {
      return err;
    }
  };

  static findItemLowestPrice = async () => {
    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $group: {
              _id: null,
              lowestPriceItem: { $min: '$price' }
            }
          }
        ])
        .toArray();

      return items[0];
    } catch (err) {
      return err;
    }
  };

  static avgItemPriceCategory = async () => {
    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category'
            }
          },
          {
            $group: {
              _id: null,
              averagePrice: { $avg: '$price' }
            }
          }
        ])
        .toArray();

      return items;
    } catch (err) {
      return err;
    }
  };

  static findCategories = async () => {
    try {
      const db = getDatabase();
      const itemCollection = db.collection('items');
      const items = await itemCollection
        .aggregate([
          {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'category'
            }
          },
          {
            $group: {
              _id: '$category.name',
              stockQuantity: { $sum: '$stock' }
            }
          },
          {
            $sort: { stockQuantity: -1 }
          }
        ])
        .toArray();

      return items;
    } catch (err) {
      return err;
    }
  };
}

module.exports = Item;
