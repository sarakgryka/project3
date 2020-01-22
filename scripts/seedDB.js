const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/trippin"
);

const tripSeed = [
  {
    origin: "Phoenix, AZ",
    destination: "Las Vegas, NV",
    
  },

  {
    origin: "Sacramento, CA",
    destination: "San Diego, CA",
    
  }
  
];

db.Trip
  .remove({})
  .then(() => db.Trip.collection.insertMany(tripSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
