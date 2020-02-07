import axios from "axios";
let solveCorsError = 'https://cors-anywhere.herokuapp.com/';
let mapsKey = `AIzaSyBmOBHvcRNaWO-4Rf4Le9YjggOeih0sDug`;
export default {
  //get trip from googlemaps//
  getLatLong: function (start, end) {
    return axios.get(`${solveCorsError}https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${mapsKey}`);
  },

  // get places of interest from googlemaps
  places: function(endLat, endLon) {
    return axios.get(`${solveCorsError}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${endLat},${endLon}&radius=30000&type=point_of_interest&key=${mapsKey}`);
  },

  // get restaurants from googlemaps
  restaurants: function(endLat, endLon) {
    return axios.get(`${solveCorsError}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${endLat},${endLon}&radius=30000&type=restaurant&key=${mapsKey}`);
  },

  getAllTrips: function () {
    return axios.get();
  },

  // Saves a trip to the database
  saveTrip: function (tripData) {
    return axios.post("/api/trips", tripData);
  },
  // Gets all saved trips//
  getTrips: function () {
    return axios.get("/api/trips");
  },
  // Gets the trip with the given id
  getTrip: function (id) {
    return axios.get("/api/trips/" + id);
  },
  // Deletes the trip with the given id
  deleteTrip: function (id) {
    return axios.delete("/api/trips/" + id);
  }

};
