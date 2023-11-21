import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://fakey:1805allen13@cluster0.xuoyq4t.mongodb.net/library';
let db;

async function connectToMongoDB() {
  try {
    if (!db) {
      await mongoose.connect(connectionString, {});
      db = mongoose.connection;

      console.log('Connected to MongoDB');
    }
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

function getDB() {
  return db;
}

export { connectToMongoDB, getDB };
