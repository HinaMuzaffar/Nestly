const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const ExpressError = require("../utils/ExpressError");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

/* Controller: Display All Listings */
module.exports.index = async (req, res) => {
  const category = req.query.category;
  const filter = {};
  if (category) {
    filter.category = category;
  }
  const allListings = await Listing.find(filter);
  const categories = Listing.schema.path("category").enumValues;
  const noListingsMsg =
    allListings.length === 0 ? "No listings found in this category." : null;

  res.render("listings/index.ejs", {
    allListings,
    categories,
    selectedCategory: category || "",
    noListingsMsg,
  });
};

/*Controller: Render Search Navbar Form */
module.exports.renderSearchForm = async (req, res, next) => {
  let { searchDestinations, checkIn, checkOut } = req.body;
  let foundListings = await Listing.find({
    $or: [
      { title: { $regex: searchDestinations, $options: "i" } },
      { location: { $regex: searchDestinations, $options: "i" } },
      { country: { $regex: searchDestinations, $options: "i" } },
    ],
  });

  if (foundListings.length) {
    res.render("listings/searchResult.ejs", {
      foundListings,
      searchDestinations,
    });
  } else {
    throw new ExpressError(
      404,
      "We're sorry, but there are currently no Nestly listings available in the location you searched. Please try for another location or check back later!"
    );
  }
};

/* Controller: Render New Listing Form */
module.exports.renderNewForm = (req, res) => {
  const categories = Listing.schema.path("category").enumValues;
  res.render("listings/new.ejs", { categories });
};

/* Controller: Show Listing Details */
module.exports.showListing = async (req, res) => {
  const id = req.params.id.trim();
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

/* Controller: Create New Listing */
module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  newListing.images = req.files.map((file) => ({
    url: file.url || file.path,
    filename: file.filename,
  }));

  newListing.geometry = response.body.features[0].geometry;

  await newListing.save();

  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

/* Controller: Render Edit Form */
module.exports.renderEditForm = async (req, res) => {
  const categories = Listing.schema.path("category").enumValues;
  const id = req.params.id.trim();
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }

  let originalImageUrl =
    listing.images.length > 0 ? listing.images[0].url : null;
  if (originalImageUrl) {
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  }
  res.render("listings/edit.ejs", { listing, originalImageUrl, categories });
};

/* Controller: Update Listing */
module.exports.updateListing = async (req, res) => {
  const id = req.params.id.trim();
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (req.files && req.files.length > 0) {
    const imgs = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));
    listing.images.push(...imgs);
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

/* Controller: Delete Listing */
module.exports.destroyListing = async (req, res) => {
  const id = req.params.id.trim();
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
