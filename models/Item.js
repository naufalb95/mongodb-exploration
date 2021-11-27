const { getDatabase } = require('../config/mongo');

class Item {
  static findAllItems = async () => {
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
