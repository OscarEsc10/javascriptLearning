require('dotenv').config(); // Load variables from the .env file
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('CrudJs'); // Name of your database
    const collection = db.collection('javascript'); // Name of your collection

    const documents = await collection.find().toArray();
    console.log(documents);
  } catch (error) {
    console.error('❌ Connection error:', error);
  } finally {
    await client.close();
  }
}

run();
