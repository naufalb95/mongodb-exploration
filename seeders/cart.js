const { getDatabase } = require('../config/mongo');

const cartsSeed = async (items, users) => {
  const cartsSeed = [
    {
      userId: users[0],
      itemId: items[0]
    },
    {
      userId: users[1],
      itemId: items[0]
    },
    {
      userId: users[1],
      itemId: items[1]
    },
    {
      userId: users[1],
      itemId: items[2]
    },
    {
      userId: users[1],
      itemId: items[3]
    },
    {
      userId: users[2],
      itemId: items[3]
    },
    {
      userId: users[0],
      itemId: items[4]
    },
    {
      userId: users[2],
      itemId: items[3]
    },
    {
      userId: users[1],
      itemId: items[7]
    },
    {
      userId: users[2],
      itemId: items[4]
    },
    {
      userId: users[0],
      itemId: items[5]
    },
    {
      userId: users[1],
      itemId: items[3]
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
