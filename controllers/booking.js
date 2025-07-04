const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");

// Function for check availability of Listing
async function isDateAvailable(listingId, desiredCheckIn, desiredCheckOut) {
  const overlappingBookings = await Booking.find({
    listing: listingId,
    $or: [
      {
        checkIn: { $lt: desiredCheckOut },
        checkOut: { $gt: desiredCheckIn },
      },
    ],
  });

  return overlappingBookings.length === 0;
}
// Render Booking Form
module.exports.renderBookingForm = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("bookings/new.ejs", { listing });
};

// Create a new booking
module.exports.createBooking = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  const { checkIn, checkOut, fullName, room, guests, requests, paymentMethod } =
    req.body;

  const days = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  const totalPrice = days * listing.price;

  const available = await isDateAvailable(
    id,
    new Date(checkIn),
    new Date(checkOut)
  );

  if (!available) {
    req.flash("error", "Sorry, the selected dates are already booked.");
    return res.redirect(`/listings/${id}`);
  }

  const booking = new Booking({
    listing: id,
    user: req.user._id,
    fullName,
    room,
    guests,
    requests,
    paymentMethod,
    checkIn,
    checkOut,
    totalPrice,
  });
  await booking.save();
  req.flash("success", "Booking Created Successfully!");
  res.redirect("/bookings", { days, totalPrice });
};

//Show Bookings
module.exports.showBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate(
    "listing"
  );
  res.render("bookings/index", { bookings });
};

// Delete Booking By ID (Cancel Booking)
module.exports.destroyBooking = async (req, res) => {
  let id = req.params.id.trim();
  await Booking.findByIdAndDelete(id);
  req.flash("success", "Booking cancelled successfully!");
  res.redirect("/bookings");
};
