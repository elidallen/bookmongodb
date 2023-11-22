import mongoose from 'mongoose';
import Movie from '../models/movie.mjs';

mongoose.connect('mongodb+srv://fakey:1805allen13@cluster0.xuoyq4t.mongodb.net/library', {});

const moviesData = [
  {
    id: "1",
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    releaseDate: new Date("2010-07-16"),
    duration: 148,
    synopsis: "A thief enters the dreams of others to steal their deepest secrets.",
    rating: 8.8,
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    genre: "Drama",
    releaseDate: new Date("1994-09-23"),
    duration: 142,
    synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 9.3,
  },
  {
    id: "3",
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action",
    releaseDate: new Date("2008-07-18"),
    duration: 152,
    synopsis: "When the menace known as The Joker emerges, Batman must confront him to bring justice to Gotham City.",
    rating: 9.0,
  },
  {
    id: "4",
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime",
    releaseDate: new Date("1994-10-14"),
    duration: 154,
    synopsis: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: 8.9,
  },
  {
    id: "5",
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    genre: "Drama",
    releaseDate: new Date("1994-07-06"),
    duration: 142,
    synopsis: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    rating: 8.8,
  },
];

export async function createMovies() {
  try {
    const createdMovies = await Movie.create(moviesData);
    console.log('Movies created:', createdMovies);
  } catch (error) {
    console.error('Error creating movies:', error);
  }
}