import React, { Component } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import API from '../utils/API';
import NavBar from '../components/NavBar';
import JumboTrip from '../components/Jumbotron-Trip';
import FormTrip from '../components/FormTrip';
import Footer from '../components/footer';
import Directions from '../components/Directions/DirectionsIndex';
import TripSearchResults from '../components/tripSearchResults/index';
import AccountDetails from '../components/AccountDetails';

class Trips extends Component {
  state = {
    value: '',
    start: '',
    end: '',
    steps: [],
    startCoords: {},
    endCoords: {},
    placesOfInterest: [],
    lodging: [],
    restaurants: [],
    trips: [],
    defaultZoom: 4,
    map: null,
    center: {
      lat: 30.266666,
      lng: -97.73333
    },
    directions: null
  };

  componentDidMount() {
    console.log('pretest');
    console.log('props', this.props);
    if (this.props.location.trip) {
      console.log('test');
      console.log(this.props);
      const getTripInfo = async id => {
        await API.getTrip(id).then(trip => {
          console.log(trip.data);
          // this guarantees that the "handleFormSubmit function" will not be run until state has been set
          this.setState({ start: trip.data.start, end: trip.data.end }, () => this.handleFormSubmit(this.props.location.trip.user));
        });
      };
      getTripInfo(this.props.location.trip.tripId);

      console.log(this.props.location.trip);
    } 
  }
  ///define what the API call is returning
  loadTrips = tripInfo => {
    return {};
  };

  saveTrip = user => {
    console.log(user);
    console.log('clicked');
    console.log('start', this.state.start);
    console.log('end', this.state.end);
    console.log('endCoords', this.state.endCoords);
    console.log('startCoords', this.state.startCoords);
    let data = {
      start: this.state.start,
      end: this.state.end,
      startCoords: JSON.stringify(this.state.startCoords),
      endCoords: JSON.stringify(this.state.endCoords),
      user: user
    };
    API.saveTrip(data)
      .then(res => window.alert('Your trip was saved!'))
      .catch(err => console.log(err));
  };

  loadMap = (startCoords, endCoords, steps) => {
    console.log(startCoords);
    console.log(endCoords);
    console.log(steps);
  };
  //define query params//
  searchTrip = (start, end) => {
    API.getLatLong(start, end)
      .then(res => {
        let htmlDirections = res.data.routes[0].legs[0].steps;
        let startCoords = res.data.routes[0].legs[0].start_location;
        console.log('startCoords from trips.js: ', startCoords);
        let endCoords = res.data.routes[0].legs[0].end_location;
        console.log('endCoords from trips.js: ', endCoords);
        let endLat = res.data.routes[0].legs[0].end_location.lat;
        let endLon = res.data.routes[0].legs[0].end_location.lng;
        this.setState({
          // startCoords: res.data.routes[0].legs[0].start_location,
          // endCoords: res.data.routes[0].legs[0].end_location,
          startCoords: startCoords,
          endCoords: endCoords,
          steps: htmlDirections
        });
        API.places(endLat, endLon).then(placesRes => {
          console.log(placesRes);

          this.setState({
            placesOfInterest: placesRes.data.results.filter(result => result.types.indexOf('lodging') === -1).map(result => result.name),
            lodging: placesRes.data.results.filter(result => result.types.indexOf('lodging') > -1).map(result => result.name)
          });
          API.restaurants(endLat, endLon).then(foodRes => {
            console.log(foodRes);
            console.log(
              'restaurants: ',
              foodRes.data.results.filter(result => result.types.indexOf('lodging') === -1).map(restaurant => restaurant.name)
            );

            this.setState({
              restaurants: foodRes.data.results.filter(result => result.types.indexOf('lodging') === -1).map(restaurant => restaurant.name)
            });
          });
        });
        console.log('start_location from trips.js: ', res.data.routes[0].legs[0].start_location);
        console.log('end_location from trips.js: ', res.data.routes[0].legs[0].end_location);
        console.log(res.data);
        console.log(htmlDirections);
        this.loadMap(this.state.startCoords, this.state.endCoords, this.state.steps);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    this.searchTrip(this.state.start, this.state.end);
    // this.saveTrip(data);
  };

  render() {
    console.log('startCoords from trip.js: ', this.state.startCoords);
    return (
      <div>
        <NavBar />
        <JumboTrip />
        <FormTrip
          startLocation={this.state.start}
          endLocation={this.state.end}
          handleInput={this.handleInput}
          handleFormSubmit={this.handleFormSubmit}
          // user={this.state.user}
        />
        <br></br>
        <Directions
          endCoords={this.state.endCoords}
          startCoords={this.state.startCoords}
          directions={this.state.directions}
          setState={this.setState.bind(this)}
          defaultZoom={this.state.defaultZoom}
          center={this.state.center}
          map={this.state.map}
        />

        <TripSearchResults steps={this.state.steps} placesOfInterest={this.state.placesOfInterest} lodging={this.state.lodging} restaurants={this.state.restaurants} saveTrip={this.saveTrip} />
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
