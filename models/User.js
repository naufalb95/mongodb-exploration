const { getDatabase } = require('../config/mongo');

class User {
  static findAllUsers = async () => {
    try {
      const db = getDatabase();
      const userCollection = db.collection('users');
      const users = await userCollection.find().toArray();

      return users;
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = User;
