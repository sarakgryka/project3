import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import NavBar from "../components/NavBar";
import JumboTrip from "../components/Jumbotron-Trip"
import FormTrip from "../components/FormTrip"
import Footer from "../components/footer";
import Directions from "../components/Directions/DirectionsIndex"
import TripSearchResults from "../components/tripSearchResults/index"
import { useAuth0 } from "../react-auth0-spa";



class Trips extends Component {
  state = {
    value: "",
    steps: []
  };

  componentDidMount() {
    this.searchTrip();
  }
  ///define what the API call is returning
  loadTrips = tripInfo => {
    return {

    }

  };

  loadMap = (startCoords, endCoords, steps) => {
console.log(startCoords)
console.log(endCoords)
console.log(steps);

  }
  //define query params//
  searchTrip = (start, end) => {
    console.log(start)
    console.log(end)

    API.getLatLong(start, end)
      .then(res => {
        let htmlDirections = res.data.routes[0].legs[0].steps

        this.setState({
          startCoords: res.data.routes[0].legs[0].start_location,
          endCoords: res.data.routes[0].legs[0].end_location,
          steps: htmlDirections
        })
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


        />
        <br></br>
        <Directions />
        <div>
          {this.state.steps.map(step => (
            <ul key={step.html_instructions}>
              <li>
              {step.html_instructions.replace(/<\/?[^>]+(>|$)/g, "")}

              </li>
            </ul>

          ))}
        </div>

        <TripSearchResults />

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
