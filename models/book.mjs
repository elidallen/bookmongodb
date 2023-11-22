import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: String,
    publishedDate: Date,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Apply JSON Schema validation rules
    validate: {
      validator: function (value) {
        // Ensure the title is at least 3 characters long
        return value && value.length >= 3;
      },
      message: 'Title must be at least 3 characters long',
    },
  }
);

bookSchema.index({ author: 1, title: 1 });

const Book = mongoose.model('Book', bookSchema);

export default Book;