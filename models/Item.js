const { getDatabase } = require('../config/mongo');

class Item {
  static findAllItems = async (options) => {
    const filter = [];
    if (options.category) {
      filter.push({
        $match: { 'category.name': options.category }
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
          ...filter
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
