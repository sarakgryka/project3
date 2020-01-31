import axios from "axios";

export default {
  //get trip from googlemaps//
  getAllTrips: function () {
    return axios.get("");
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
