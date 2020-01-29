import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";

import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";

import NavBar from "../components/NavBar";
import JumboTrip from "../components/Jumbotron-Trip"
import FormTrip from "../components/FormTrip"

import Footer from "../components/footer";



class Trips extends Component {
  state = {

  };

  componentDidMount() {

  }

  loadTrips = () => {

  };

  deleteTrip = id => {

  };



  render() {
    return (
      <div>

          <NavBar />
          <JumboTrip />
          <FormTrip />
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
