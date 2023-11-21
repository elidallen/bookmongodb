// import mongoose and Book here (adjust the path based on your project structure)
import mongoose from 'mongoose';
import Book from '../models/book.mjs';
;

async function removeDuplicates() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://fakey:1805allen13@cluster0.xuoyq4t.mongodb.net/library', 
    { useNewUrlParser: true, useUnifiedTopology: true });

    // Find and remove duplicates based on a specific field (e.g., title)
    const duplicates = await Book.aggregate([
      {
        $group: {
          _id: { title: "$title" },
          count: { $sum: 1 },
          ids: { $addToSet: "$_id" }
        }
      },
      {
        $match: {
          count: { $gt: 1 }
        }
      }
    ]);

    // Iterate over duplicates and remove extra documents
    for (const duplicate of duplicates) {
      const [primaryId, ...extraIds] = duplicate.ids;
      await Book.deleteMany({ _id: { $in: extraIds } });
      console.log(`Removed duplicates for title '${duplicate._id.title}'`);
    }

    console.log('Duplicates removed successfully');
  } catch (error) {
    console.error('Error removing duplicates:', error);
  } 
}

// Export the removeDuplicates function
export { removeDuplicates };
