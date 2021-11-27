const { getDatabase } = require('../config/mongo');
const { ObjectId } = require('mongodb');

const itemSeeder = async (categories) => {
  const itemsSeed = [
    {
      name: 'Kangkung',
      price: 2500,
      stock: 250,
      description: 'Sebuah sayur yang namanya kangkung',
      categoryId: ObjectId(categories[1]._id)
    },
    {
      name: 'Apel',
      price: 25000,
      stock: 150,
      description: 'Sebuah buah yang namanya apel',
      categoryId: ObjectId(categories[0]._id)
    },
    {
      name: 'Cheetos',
      price: 4500,
      stock: 100,
      description: 'Sebuah snacks yang namanya cheetos',
      categoryId: ObjectId(categories[2]._id)
    },
    {
      name: 'Baskin n Robin',
      price: 50000,
      stock: 50,
      description: 'Sebuah ice cream yang namanya baskin n robin',
      categoryId: ObjectId(categories[3]._id)
    },
    {
      name: 'Bawang Merah',
      price: 3500,
      stock: 230,
      description: 'Sebuah sayur yang namanya bawang merah',
      categoryId: ObjectId(categories[1]._id)
    },
    {
      name: 'Bawang Putih',
      price: 5500,
      stock: 170,
      description: 'Sebuah sayur yang namanya bawang putih',
      categoryId: ObjectId(categories[1]._id)
    },
    {
      name: 'Pepaya',
      price: 20500,
      stock: 20,
      description: 'Sebuah buah yang namanya pepaya',
      categoryId: ObjectId(categories[0]._id)
    },
    {
      name: 'Momogi',
      price: 2500,
      stock: 250,
      description: 'Sebuah snacks yang namanya momogi',
      categoryId: ObjectId(categories[2]._id)
    },
    {
      name: 'Cabai',
      price: 55000,
      stock: 130,
      description: 'Sebuah sayur yang namanya cabai',
      categoryId: ObjectId(categories[1]._id)
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
