const Listing = require("./models/listing");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

// Middleware to check if the user is logged in
module.exports.isLogged = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to create listing!");
    return res.redirect("/login");
  }
  next();
};

// Middleware to store the original URL for redirecting after login
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//Middleware to check if current user is owner of listing
module.exports.isOwner = async (req, res, next) => {
  const id = req.params.id.trim();
  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of the listing.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

//Middleware for server-side validation listingSchema
module.exports.validateListing = (req, res, next) => {
  let error = listingSchema.validate(req.body);
  if (error && error.details) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Middleware for server-side validation reviewSchema
module.exports.validateReview = (req, res, next) => {
  let error = reviewSchema.validate(req.body);
  if (error && error.details) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Middleware to check If Loggedin user is the author of review
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of this review.");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
