const express = require('express');
const { getMovies, createMovie, updateMovie, deleteMovie, upload } = require('../controllers/movieController');
const { auth, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getMovies);
router.post('/', auth, admin, upload, createMovie);
router.put('/:id', auth, admin, upload, updateMovie);
router.delete('/:id', auth, admin, deleteMovie);

module.exports = router;

