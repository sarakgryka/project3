const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
 
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
