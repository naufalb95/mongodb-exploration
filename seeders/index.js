const { connect } = require('../config/mongo');
const userSeeder = require('./user');
const categorySeeder = require('./category');
const itemSeeder = require('./item');
const cartsSeeder = require('./cart');

connect().then(async () => {
  const { insertedIds: users } = await userSeeder();
  const { insertedIds: categories } = await categorySeeder();
  const { insertedIds: items } = await itemSeeder(categories);
  await cartsSeeder(items, users);
});
