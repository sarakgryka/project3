const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  start: { type: String, required: true },
  end: { type: String, required: true }
  // startLat: { type: Number, required: true},
  // startLon: { type: Number, required: true},
  // endLat: { type: Number, required: true},
  // endLon: { type: Number, required: true},
  // email: { type: String, required: true}
 // lat-start, lon-start, lat-end, lon-end, userID, userEmail 
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
