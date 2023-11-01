const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewModelControllers');

router.get('/', reviewController.getAllReviews);
router.get('/search', reviewController.getReviewsByUserEmail);

module.exports = router;
