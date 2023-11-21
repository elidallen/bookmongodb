import Book from '../models/book.mjs';

export const handleBooksRequest = async (req, res) => {
  switch (req.method) {
    case 'POST':
      try {
        const book = new Book(req.body);
        const result = await book.save();
        res.status(201).json(result);
      } catch (error) {
        res.status(400).json({ error: `Bad Request: ${error.message}` });
      }
      break;

    case 'GET':
      try {
        if (req.params.id) {
          const book = await Book.findOne({ id: req.params.id });
          if (!book) {
            return res.status(404).json({ error: 'Book not found' });
          }
          res.json(book);
        } else {
          // Fetch all books if no ID is provided
          const books = await Book.find();
          res.json(books);
        }
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    case 'PUT':
      try {
        const updatedBook = await Book.findOneAndUpdate({ id: req.params.id }, req.body, {
          new: true,
        });
        if (!updatedBook) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    case 'DELETE':
      try {
        const deletedBook = await Book.findOneAndDelete({ id: req.params.id });
        if (!deletedBook) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.json(deletedBook);
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};