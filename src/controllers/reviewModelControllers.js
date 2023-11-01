const reviewModel = require('../models/review');

const getAllReviews = (req, res) => {
  const reviews = reviewModel.getAllReviews();
  res.json(reviews);
};

const getReviewsByUserEmail = (req, res) => {
  const userEmail = req.query.userEmail;
  if (!userEmail) {
    return res.status(400).json({ error: 'User email is required for the search.' });
  }

  const reviews = reviewModel.getReviewsByUserEmail(userEmail);
  res.json(reviews);
};

module.exports = {
  getAllReviews,
  getReviewsByUserEmail,
};
