const { getDatabase } = require('../config/mongo');
const { ObjectId } = require('mongodb');

const itemSeeder = async (categories) => {
  const itemsSeed = [
    {
      name: 'Kangkung',
      price: 2500,
      stock: 250,
      description: 'Sebuah sayur yang namanya kangkung',
      categoryId: categories[1]
    },
    {
      name: 'Apel',
      price: 25000,
      stock: 150,
      description: 'Sebuah buah yang namanya apel',
      categoryId: categories[0]
    },
    {
      name: 'Cheetos',
      price: 4500,
      stock: 100,
      description: 'Sebuah snacks yang namanya cheetos',
      categoryId: categories[2]
    },
    {
      name: 'Baskin n Robin',
      price: 50000,
      stock: 50,
      description: 'Sebuah ice cream yang namanya baskin n robin',
      categoryId: categories[3]
    },
    {
      name: 'Bawang Merah',
      price: 3500,
      stock: 230,
      description: 'Sebuah sayur yang namanya bawang merah',
      categoryId: categories[1]
    },
    {
      name: 'Bawang Putih',
      price: 5500,
      stock: 170,
      description: 'Sebuah sayur yang namanya bawang putih',
      categoryId: categories[1]
    },
    {
      name: 'Pepaya',
      price: 20500,
      stock: 20,
      description: 'Sebuah buah yang namanya pepaya',
      categoryId: categories[0]
    },
    {
      name: 'Momogi',
      price: 2500,
      stock: 250,
      description: 'Sebuah snacks yang namanya momogi',
      categoryId: categories[2]
    },
    {
      name: 'Cabai',
      price: 55000,
      stock: 130,
      description: 'Sebuah sayur yang namanya cabai',
      categoryId: categories[1]
    }
  ];
  try {
    const db = getDatabase();
    const itemCollection = db.collection('items');
    const items = await itemCollection.insertMany(itemsSeed);

    console.log('Success seeding items!');
    return items;
  } catch (err) {
    console.log('An error occured.');
  }
};

module.exports = itemSeeder;
