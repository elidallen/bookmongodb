import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  genre: String,
  releaseDate: Date,
  duration: Number, // Duration in minutes
  synopsis: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
});

movieSchema.index({ director: 1, title: 1 });

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;