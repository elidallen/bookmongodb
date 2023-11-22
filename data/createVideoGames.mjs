// createVideoGames.mjs
import mongoose from 'mongoose';
import VideoGame from '../models/videoGame.mjs';

// Connect to MongoDB
mongoose.connect('mongodb+srv://fakey:1805allen13@cluster0.xuoyq4t.mongodb.net/library', {});

// Create 5 video games with unique IDs
const videoGamesData = [
  {
    id: '1',
    title: 'Game 1',
    developer: 'Developer 1',
    description: 'Description 1',
    releaseDate: new Date(),
    completed: false,
  },
  {
    id: '2',
    title: 'Game 2',
    developer: 'Developer 2',
    description: 'Description 2',
    releaseDate: new Date(),
    completed: true,
  },
  {
    id: '3',
    title: 'Game 3',
    developer: 'Developer 3',
    description: 'Description 3',
    releaseDate: new Date(),
    completed: false,
  },
  {
    id: '4',
    title: 'Game 4',
    developer: 'Developer 4',
    description: 'Description 4',
    releaseDate: new Date(),
    completed: true,
  },
  {
    id: '5',
    title: 'Game 5',
    developer: 'Developer 5',
    description: 'Description 5',
    releaseDate: new Date(),
    completed: false,
  },
];

export async function createVideoGames() {
  try {
    const createdVideoGames = await VideoGame.create(videoGamesData);
    console.log('Video Games created:', createdVideoGames);
  } catch (error) {
    console.error('Error creating video games:', error);
  }
}