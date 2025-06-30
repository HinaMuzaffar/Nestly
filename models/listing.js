const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  price: Number,
  reviews: String,
  location: String,
  country: String,
  cancellationPolicy: String,
  availableFrom: Date,
  availableTo: Date,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  category: {
    type: String,
    enum: [
      "Mountains",
      "Rooms",
      "Castles",
      "Farms",
      "Arctic",
      "Camping",
      "Iconic cities",
      "Amazing pools",
      "Boats",
      "Trending",
      "Historic",
      "Beach",
      "Lake",
      "Luxury",
      "Ski",
      "Countryside",
      "Adventure",
      "Cabin",
    ],
  },
});

// Delete Reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

//  Delete Bookings when a listing is deleted
listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Booking.deleteMany({ listing: listing._id });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
