const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  genre: { type: String, required: true },
  director: { type: String },
  releaseDate: { type: Date },
  rating: { type: Number, default: 0 },
  poster: { type: String }, // Path to the uploaded image
});

module.exports = mongoose.model('Movie', movieSchema);

