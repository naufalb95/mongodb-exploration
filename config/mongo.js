const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mongodb-explore';
let database = null;

const connect = async () => {
  try {
    await client.connect();

    const db = client.db(dbName);
    database = db;
  } catch (err) {
    console.log(err);
  }
};

const getDatabase = () => database;

module.exports = { connect, getDatabase };
