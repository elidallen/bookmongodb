// index.mjs
import bodyParser from 'body-parser';
import express from 'express';
import { createBooks } from './data/createBooks.mjs';
import { connectToMongoDB, getDB } from './db/connection.mjs';
import { removeDuplicates } from './duplicates/removeDuplicates.mjs';
import { handleBooksRequest } from './routes/books.mjs';
const app = express();
const PORT = 3000;



async function startServer() {
  try {
    
   
    // Connect to MongoDB
    await connectToMongoDB();

    // Use the database connection
    const db = getDB();

    // Event handling for successful connection
    db.once('open', async () => {
      console.log('Connected to MongoDB');

      // Set up middleware
      app.use(bodyParser.json());

      await createBooks();
      await removeDuplicates();
      // Handle books requests
      app.route(['/books', '/book/:id?'])
  .all(handleBooksRequest);

      // Start the server
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

// Start the server
startServer();