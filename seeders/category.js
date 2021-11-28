const { getDatabase } = require('../config/mongo');

const categoriesSeed = [
  {
    name: 'fruit'
  },
  {
    name: 'vegetable'
  },
  {
    name: 'snacks'
  },
  {
    name: 'ice cream'
  }
];

const categorySeeder = async () => {
  try {
    const db = getDatabase();
    const categoryCollection = db.collection('categories');
    const categories = await categoryCollection.insertMany(categoriesSeed);

    console.log('Success seeding categories!');
    return categories;
  } catch (err) {
    console.log('An error occured.');
  }
};

module.exports = categorySeeder;
