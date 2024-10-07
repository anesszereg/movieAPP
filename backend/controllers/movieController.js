const Movie = require('../models/Movie');
const multer = require('multer');
const path = require('path');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

exports.upload = multer({ storage }).single('poster');

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create movie
exports.createMovie = async (req, res) => {
  const { title, description, genre, director, releaseDate, rating } = req.body;
  
  try {
    const movie = new Movie({
      title,
      description,
      genre,
      director,
      releaseDate,
      rating,
      poster: req.file ? req.file.path : null,
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update movie
exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  
  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    movie.title = req.body.title || movie.title;
    movie.description = req.body.description || movie.description;
    movie.genre = req.body.genre || movie.genre;
    movie.director = req.body.director || movie.director;
    movie.releaseDate = req.body.releaseDate || movie.releaseDate;
    movie.rating = req.body.rating || movie.rating;

    if (req.file) movie.poster = req.file.path;
    
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete movie
exports.deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });

    await movie.remove();
    res.json({ message: 'Movie removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

