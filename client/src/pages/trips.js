import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import NavBar from "../components/NavBar";
import JumboTrip from "../components/Jumbotron-Trip"
import FormTrip from "../components/FormTrip"
import Footer from "../components/footer";
import Directions from "../components/Directions/DirectionsIndex";
import TripSearchResults from "../components/tripSearchResults/index";
import AccountDetails from "../components/AccountDetails";



class Trips extends Component {
  // state = {
  //   value: "",
  //   steps: [],
  //   startCoords: {},
  //   endCoords: {},
  //   placesOfInterest: [],
  //   lodging: [],
  //   restaurants: []
  // };

// This only needs to be called if an API call needs to be done when the page loads
  componentDidMount() {
    // this.searchTrip();
  }
  ///define what the API call is returning
  loadTrips = tripInfo => {
    return {

    }
  };

  saveTrip = data => {
    API.saveTrip(data);
  }

  loadMap = (startCoords, endCoords, steps) => {
    console.log(startCoords)
    console.log(endCoords)
    console.log(steps);
  }
  //define query params//
  searchTrip = (start, end) => {

    API.getLatLong(start, end)
      .then(res => {
        let htmlDirections = res.data.routes[0].legs[0].steps;
        let startCoords = res.data.routes[0].legs[0].start_location;
        console.log("startCoords from trips.js: ", startCoords)
        let endCoords = res.data.routes[0].legs[0].end_location;
        console.log("endCoords from trips.js: ", endCoords);
        let endLat = res.data.routes[0].legs[0].end_location.lat;
        let endLon = res.data.routes[0].legs[0].end_location.lng;
        this.props.setState({
          // startCoords: res.data.routes[0].legs[0].start_location,
          // endCoords: res.data.routes[0].legs[0].end_location,
          startCoords: startCoords,
          endCoords: endCoords,
          steps: htmlDirections
        });
        API.places(endLat, endLon)
          .then(
            placesRes => {
              console.log(placesRes);

              this.props.setState({
                placesOfInterest: placesRes.data.results
                  .filter(result => result.types.indexOf("lodging") === -1)
                  .map(result => result.name),
                lodging: placesRes.data.results
                  .filter(result => result.types.indexOf("lodging") > -1)
                  .map(result => result.name)
              });
              API.restaurants(endLat, endLon)
                .then(
                  foodRes => {
                    console.log(foodRes);
                    console.log("restaurants: ", foodRes.data.results
                      .filter(result => result.types.indexOf("lodging") === -1)
                      .map(restaurant => restaurant.name));

                    this.props.setState({
                      restaurants: foodRes.data.results
                        .filter(result => result.types.indexOf("lodging") === -1)
                        .map(restaurant => restaurant.name)
                    })
                  }
                );
            }
          );
        console.log("start_location from trips.js: ", res.data.routes[0].legs[0].start_location);
        console.log("end_location from trips.js: ", res.data.routes[0].legs[0].end_location);
        console.log(res.data);
        console.log(htmlDirections);
        this.loadMap(this.props.state.startCoords, this.props.state.endCoords, this.props.state.steps)
      }
      )
      .catch(err => console.log(err))
  }

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    if (this.props.setState) {
      this.props.setState({
        [name]: value
      })
    }
  }

  handleFormSubmit = user => {


    console.log(user)
    console.log("clicked")
    console.log(this.props.state.start)
    console.log(this.props.state.end)
    console.log(this.props.state.endCoords)
    console.log(this.props.state.startCoords)
    let data = {
      start: this.props.state.start,
      end: this.props.state.end,
      startCoords: JSON.stringify(this.props.state.startCoords),
      endCoords: JSON.stringify(this.props.state.endCoords),
      user: user
    }
    this.searchTrip(this.props.state.start, this.props.state.end)
    this.saveTrip(data)
  }
  
  render() {
    console.log("startCoords from trip.js: ", this.props.state.startCoords);
    return (

      <div>

        <NavBar />
        <JumboTrip />
        <FormTrip
          startLocation={this.props.state.start}
          endLocation={this.props.state.end}
          handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit}
        // user={this.state.user}

        />
        <br></br>
        <Directions
          endCoords={this.props.state.endCoords}
          startCoords={this.props.state.startCoords}
          directions={this.props.state.directions}
          setState={this.props.setState}
          defaultZoom={this.props.state.defaultZoom}
          center={this.props.state.center}
          map={this.props.state.map}
        />

        <TripSearchResults
          steps={this.props.state.steps}
          placesOfInterest={this.props.state.placesOfInterest}
          lodging={this.props.state.lodging}
          restaurants={this.props.state.restaurants} />
        <Footer />


      </div>
    );
  }
}

// function Trips() {
//   return (
//     <div>

//       <NavBar />
//       <JumboTrip />
//       <FormTrip />
//       <Footer />


//     </div>
//   );
// }

export default Trips;
