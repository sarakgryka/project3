import axios from "axios";
let solveCorsError = 'https://cors-anywhere.herokuapp.com/';
export default {
  //get trip from googlemaps//
  getLatLong: function (start,end) {
    return axios.get(`${solveCorsError}https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=AIzaSyBmOBHvcRNaWO-4Rf4Le9YjggOeih0sDug`);
  },

  getAllTrips: function () {
    return axios.get();
  },

  // Saves a trip to the database
  saveTrip: function (tripInfo) {
    return axios.post("/api/trips", tripInfo);
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
