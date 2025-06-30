const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Booking = require("../models/booking.js");
const { isLogged, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const bookingController = require("../controllers/booking.js");

//Render Booking Form
router.get("/:id/new", isLogged, bookingController.renderBookingForm);

//Create a new booking
router.post("/:id", isLogged, wrapAsync(bookingController.createBooking));

// Show All Bookings
router.get("/", isLogged, wrapAsync(bookingController.showBookings));

// Delete Booking
router.delete("/:id", isLogged, wrapAsync(bookingController.destroyBooking));

module.exports = router;
