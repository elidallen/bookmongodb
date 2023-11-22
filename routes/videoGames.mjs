import VideoGame from '../models/videoGame.mjs';

export const handleVideoGamesRequest = async (req, res) => {
  switch (req.method) {
    case 'POST':
      try {
        const videoGame = new VideoGame(req.body);
        const result = await videoGame.save();
        res.status(201).json(result);
      } catch (error) {
        res.status(400).json({ error: `Bad Request: ${error.message}` });
      }
      break;

    case 'GET':
      try {
        if (req.params.id) {
          const videoGame = await VideoGame.findOne({ id: req.params.id });
          if (!videoGame) {
            return res.status(404).json({ error: 'Video Game not found' });
          }
          res.json(videoGame);
        } else {
          // Fetch all video games if no ID is provided
          const videoGames = await VideoGame.find();
          res.json(videoGames);
        }
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    case 'PUT':
      try {
        const updatedVideoGame = await VideoGame.findOneAndUpdate({ id: req.params.id }, req.body, {
          new: true,
        });
        if (!updatedVideoGame) {
          return res.status(404).json({ error: 'Video Game not found' });
        }
        res.json(updatedVideoGame);
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    case 'DELETE':
      try {
        const deletedVideoGame = await VideoGame.findOneAndDelete({ id: req.params.id });
        if (!deletedVideoGame) {
          return res.status(404).json({ error: 'Video Game not found' });
        }
        res.json(deletedVideoGame);
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
};