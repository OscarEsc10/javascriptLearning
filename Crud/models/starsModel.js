// This module defines the StarsModel class for interacting with the 'javascript' collection in the 'CrudJs' MongoDB database.
// It uses the MongoDB Node.js driver and loads environment variables with dotenv.
import { MongoClient } from 'mongodb';
import 'dotenv/config';

// Create a new MongoClient instance using the MongoDB URI from environment variables
const client = new MongoClient(process.env.MONGO_URI);
// Connect to the MongoDB server (requires Node.js 14+ with top-level await and "type": "module")
await client.connect();

// Get a reference to the 'CrudJs' database and the 'javascript' collection
const db = client.db('CrudJs');
const collection = db.collection('javascript');

// StarsModel provides methods to interact with the 'javascript' collection
class StarsModel {
  // Inserts a new document (star) into the collection
  async create(star) {
    return await collection.insertOne(star);
  }
}

// Export a singleton instance of StarsModel
export default new StarsModel();
