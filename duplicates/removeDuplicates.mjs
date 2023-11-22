import mongoose from 'mongoose';

async function removeDuplicatesFromCollections(...collections) {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb+srv://fakey:1805allen13@cluster0.xuoyq4t.mongodb.net/library', 
    { useNewUrlParser: true, useUnifiedTopology: true });

    // Iterate over provided collections
    for (const collection of collections) {
      // Get the collection name based on the model
      const collectionName = mongoose.connection.models[collection.modelName].collection.name;

      // Find and remove duplicates based on the 'title' field
      const duplicates = await collection.aggregate([
        {
          $group: {
            _id: { title: '$title' },
            count: { $sum: 1 },
            ids: { $addToSet: '$_id' }
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
        await collection.deleteMany({ _id: { $in: extraIds } });
        console.log(`Removed duplicates for ${collectionName} based on the 'title' field: '${duplicate._id.title}'`);
      }

      console.log(`Duplicates removed successfully for ${collectionName}`);
    }
  } catch (error) {
    console.error('Error removing duplicates:', error);
  }
}


// Export the removeDuplicatesFromCollections function
export { removeDuplicatesFromCollections };
