import mongoose from 'mongoose';

const videoGameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  description: String,
  releaseDate: Date,
  completed: {
    type: Boolean,
    default: false,
  },
});

videoGameSchema.index({ developer: 1, title: 1 });

const VideoGame = mongoose.model('VideoGame', videoGameSchema);

export default VideoGame;