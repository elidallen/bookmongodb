import Movie from '../models/movie.mjs';

export const handleMoviesRequest = async (req, res) => {
  const { id } = req.params;

  switch (req.method) {
    case 'POST':
      try {
        const movie = new Movie(req.body);
        const result = await movie.save();
        res.status(201).json(result);
      } catch (error) {
        res.status(400).json({ error: `Bad Request: ${error.message}` });
      }
      break;

    case 'GET':
      try {
        if (id) {
          const movie = await Movie.findOne({ id });
          if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
          }
          res.json(movie);
        } else {
          // Fetch all movies if no ID is provided
          const movies = await Movie.find();
          res.json(movies);
        }
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    case 'PUT':
      try {
        const updatedMovie = await Movie.findOneAndUpdate({ id }, req.body, {
          new: true,
        });
        if (!updatedMovie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(updatedMovie);
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    case 'DELETE':
      try {
        const deletedMovie = await Movie.findOneAndDelete({ id });
        if (!deletedMovie) {
          return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(deletedMovie);
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};