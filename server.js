const express = require("express");

// this is from Michael
// and this is Michael's second comment for push #2
// this is 3rd comment

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trippin");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


/*

Tasks we still need to finish:

We need to have 3 new components: 
1) list component that displays a list of trips and 
2) trip component that displays the data of a given trip 
3) On the "trips" page, we need a button component to save a trip
Thoughts behind it: once a user is signed in, we need to give them access to 
a list of trips that they have saved. And when the user clicks on a trip 
they're interested in, it should give them a list of data fot that trip.
what data should that consist of? Hotels nearby, step by step directions 
places of interest, restaurants? 




pseudocode-------------------------------
*/