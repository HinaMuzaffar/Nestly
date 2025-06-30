const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogged, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Route: Display All Listings
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLogged,
    upload.array("listing[images]", 10),
    validateListing,
    wrapAsync(listingController.createListing)
  );

// Route : Search Listing through Search Navbar Form
router.post(
  "/search",
  upload.none(),
  wrapAsync(listingController.renderSearchForm)
);
// Route: Create New Listing form
router.get("/new", isLogged, listingController.renderNewForm);

// Route : Show , Update and Delete single Listing by ID
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLogged,
    isOwner,
    upload.array("listing[images]", 10),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLogged, isOwner, wrapAsync(listingController.destroyListing));

// Route : Edit listing form
router.get(
  "/:id/edit",
  isLogged,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
