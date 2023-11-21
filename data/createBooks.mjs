import mongoose from 'mongoose';
import Book from '../models/book.mjs';

// Connect to MongoDB
mongoose.connect('mongodb+srv://fakey:1805allen13@cluster0.xuoyq4t.mongodb.net/library', {});

// Create 5 books with unique IDs
const booksData = [
  {
    id: '1',
    title: 'Book 1',
    author: 'Author 1',
    description: 'Description 1',
    publishedDate: new Date(),
    completed: false,
  },
  {
    id: '2',
    title: 'Book 2',
    author: 'Author 2',
    description: 'Description 2',
    publishedDate: new Date(),
    completed: true,
  },
  {
    id: '3',
    title: 'Book 3',
    author: 'Author 3',
    description: 'Description 3',
    publishedDate: new Date(),
    completed: false,
  },
  {
    id: '4',
    title: 'Book 4',
    author: 'Author 4',
    description: 'Description 4',
    publishedDate: new Date(),
    completed: true,
  },
  {
    id: '5',
    title: 'Book 5',
    author: 'Author 5',
    description: 'Description 5',
    publishedDate: new Date(),
    completed: false,
  },
];

// createBooks.mjs
export async function createBooks() {
  try {
    const createdBooks = await Book.create(booksData);
    console.log('Books created:', createdBooks);
  } catch (error) {
    console.error('Error creating books:', error);
  }
}