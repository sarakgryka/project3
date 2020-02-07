import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import NavBar from "../components/NavBar";
import JumboTrip from "../components/Jumbotron-Trip"
import FormTrip from "../components/FormTrip"
import Footer from "../components/footer";
import Directions from "../components/Directions/DirectionsIndex"
import TripSearchResults from "../components/tripSearchResults/index"
import AccountDetails from "../components/AccountDetails"



class Trips extends Component {
  state = {
    value: "",
    steps: [],
    startCoords: {},
    endCoords: {},
    placesOfInterest: [],
    lodging: [],
    restaurants: []
  };

  componentDidMount() {
    this.searchTrip();
   
  }
  ///define what the API call is returning
  loadTrips = tripInfo => {
    return {

    }

  };


  saveTrip() {

 API.saveTrip({

  start:this.state.start,
  end:this.state.end
 })
  
  }

  loadMap = (startCoords, endCoords, steps) => {
console.log(startCoords)
console.log(endCoords)
console.log(steps);
this.saveTrip();
  }
  //define query params//
  searchTrip = (start, end) => {
  

    API.getLatLong(start, end)
      .then(res => {
        let htmlDirections = res.data.routes[0].legs[0].steps;
        let startCoords = res.data.routes[0].legs[0].start_location;
        let endCoords = res.data.routes[0].legs[0].end_location;
        let endLat = res.data.routes[0].legs[0].end_location.lat;
        let endLon = res.data.routes[0].legs[0].end_location.lng;
        this.setState({
          startCoords: res.data.routes[0].legs[0].start_location,
          endCoords: res.data.routes[0].legs[0].end_location,
          steps: htmlDirections
        });
        API.places(endLat, endLon)
        .then(
          placesRes => {
            console.log(placesRes);

            this.setState({
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

                  this.setState({
                    restaurants: foodRes.data.results
                      .filter(result => result.types.indexOf("lodging") === -1)
                      .map(restaurant => restaurant.name)
                  })
              }
            );
          }
        );
        console.log("start_location: ",res.data.routes[0].legs[0].start_location);
        console.log("end_location: ",res.data.routes[0].legs[0].end_location);
        console.log(res.data);
        
        console.log(htmlDirections);
        this.loadMap(this.state.startCoords, this.state.endCoords, this.state.steps)


      }

      )
      .catch(err => console.log(err))
  }

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {

    event.preventDefault();
    console.log("clicked")
    console.log(this.state.start)
    console.log(this.state.end)
    this.searchTrip(this.state.start, this.state.end)

  }
  

  render() {


   

    return (
   
      <div>

        <NavBar />
        <JumboTrip />
        <FormTrip
          start={this.state.start}
          end={this.state.end}
          handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit}
          // user={this.state.user}


        />
        <br></br>
        <Directions endCoords={this.state.endCoords}
          startCoords={this.state.startCoords} />

        <TripSearchResults 
          steps={this.state.steps}
          placesOfInterest={this.state.placesOfInterest}
          lodging={this.state.lodging} 
          restaurants={this.state.restaurants} />

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
