const { getDatabase } = require('../config/mongo');

const usersSeed = [
  {
    username: 'admin',
    password: 'test',
    email: 'admin@test.com',
    address: 'Admin home'
  },
  {
    username: 'user',
    password: 'test',
    email: 'user@test.com',
    address: 'User home'
  },
  {
    username: 'testuser',
    password: 'test',
    email: 'testuser@test.com',
    address: 'TestUser home'
  }
];

const userSeeder = async () => {
  try {
    const db = getDatabase();
    const userCollection = db.collection('users');
    const users = await userCollection.insertMany(usersSeed);

    console.log('Success seeding users!');
    return users;
  } catch (err) {
    console.log('An error occured.');
  }
};

module.exports = userSeeder;
