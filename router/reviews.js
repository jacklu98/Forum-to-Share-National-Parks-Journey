const express = require('express');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/expressError');
const reviews = require('../controllers/reviews');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;