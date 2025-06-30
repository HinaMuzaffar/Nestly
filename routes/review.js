const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const {
  validateReview,
  isLogged,
  isReviewAuthor,
} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// Route : Post Review
router.post(
  "/",
  isLogged,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Route : Delete Review
router.delete(
  "/:reviewId",
  isLogged,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
