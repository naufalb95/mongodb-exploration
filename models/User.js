const { getDatabase } = require('../config/mongo');

class User {
  static findAllUsers = async () => {
    try {
      const db = getDatabase();
      const userCollection = db.collection('users');
      const users = await userCollection
        .aggregate([
          {
            $unset: 'password'
          }
        ])
        .toArray();

      return users;
    } catch (err) {
      return err;
    }
  };
}

module.exports = User;
