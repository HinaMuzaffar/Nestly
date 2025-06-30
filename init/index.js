const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken =
  "pk.eyJ1IjoiaGluYW11emFmZmFyIiwiYSI6ImNtOXo3czV5cTB1b3Qya3NnYzA0NjJucWUifQ.brqX4mdEW_Tsq-8M8rSMaw";
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function response(listing) {
  let res = await geocodingClient
    .forwardGeocode({
      query: listing.location,
      limit: 1,
    })
    .send();
  return res.body.features[0].geometry;
}
const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
      ...obj,
      owner: "685abb670f6ba82807657e8a",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
  } catch (err) {
    console.log(err);
  }
};

initDB();
