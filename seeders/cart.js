const { ObjectId } = require('mongodb');
const { getDatabase } = require('../config/mongo');

const cartsSeed = async (items, users) => {
  const cartsSeed = [
    {
      userId: ObjectId(users[0]._id),
      itemId: ObjectId(items[0]._id)
    },
    {
      userId: ObjectId(users[1]._id),
      itemId: ObjectId(items[0]._id)
    },
    {
      userId: ObjectId(users[1]._id),
      itemId: ObjectId(items[1]._id)
    },
    {
      userId: ObjectId(users[1]._id),
      itemId: ObjectId(items[2]._id)
    },
    {
      userId: ObjectId(users[1]._id),
      itemId: ObjectId(items[3]._id)
    },
    {
      userId: ObjectId(users[2]._id),
      itemId: ObjectId(items[3]._id)
    },
    {
      userId: ObjectId(users[0]._id),
      itemId: ObjectId(items[4]._id)
    },
    {
      userId: ObjectId(users[2]._id),
      itemId: ObjectId(items[3]._id)
    },
    {
      userId: ObjectId(users[1]._id),
      itemId: ObjectId(items[7]._id)
    },
    {
      userId: ObjectId(users[2]._id),
      itemId: ObjectId(items[4]._id)
    },
    {
      userId: ObjectId(users[0]._id),
      itemId: ObjectId(items[5]._id)
    },
    {
      userId: ObjectId(users[1]._id),
      itemId: ObjectId(items[3]._id)
    }
  ];

  try {
    const db = getDatabase();
    const cartsCollection = db.collection('carts');
    const carts = await cartsCollection.insertMany(cartsSeed);

    console.log('Success seeding carts!');
    return carts;
  } catch (err) {
    console.log('An error occured.');
  }
};

module.exports = cartsSeed;
