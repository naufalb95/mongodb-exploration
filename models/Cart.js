const { getDatabase } = require('../config/mongo');

class User {
  static findAllCarts = async () => {
    try {
      const db = getDatabase();
      const cartCollection = db.collection('carts');
      const carts = await cartCollection
        .aggregate([
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'user'
            }
          },
          {
            $lookup: {
              from: 'items',
              localField: 'itemId',
              foreignField: '_id',
              as: 'item'
            }
          },
          {
            $lookup: {
              from: 'categories',
              localField: 'item.categoryId',
              foreignField: '_id',
              as: 'category'
            }
          },
          {
            $unset: ['user.password', 'userId', 'itemId', 'item.categoryId']
          }
        ])
        .toArray();

      return carts;
    } catch (err) {
      return err;
    }
  };

  static countCarts = async () => {
    try {
      const db = getDatabase();
      const cartCollection = db.collection('carts');
      const carts = await cartCollection
        .aggregate([
          {
            $count: 'totalCarts'
          }
        ])
        .toArray();

      return carts[0];
    } catch (err) {
      return err;
    }
  };
}

module.exports = User;
