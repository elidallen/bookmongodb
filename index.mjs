// index.mjs
import bodyParser from 'body-parser';
import express from 'express';
import { createBooks } from './data/createBooks.mjs';
import { createMovies } from './data/createMovies.mjs';
import { createVideoGames } from './data/createVideoGames.mjs';
import { connectToMongoDB, getDB } from './db/connection.mjs';
import { removeDuplicatesFromCollections } from './duplicates/removeDuplicates.mjs';
import { handleBooksRequest } from './routes/books.mjs';
import { handleMoviesRequest } from './routes/movies.mjs';
import { handleVideoGamesRequest } from './routes/videoGames.mjs';

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
      await createVideoGames();
      await createMovies();
      await removeDuplicatesFromCollections(Book, VideoGame, Movie);
      // Handle books requests
      app.route(['/books', '/book/:id?']).all(handleBooksRequest);
      app.all(['/videogame/:id?', '/videoGames/:id?'], handleVideoGamesRequest);
      app.all(['/movie/:id?', '/movies/:id?'], handleMoviesRequest);

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