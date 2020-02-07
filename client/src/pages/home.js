import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

import { Col, Row, Container } from "../components/Grid";
import NavBar from "../components/NavBar";
import HeroImage from "../components/hero-image";
import FirstBlock from "../components/firstBlock";
import WideJumbo from "../components/wideJumbo";
import SecondBlock from "../components/secondBlock";
import Footer from "../components/footer";

class Home extends Component {
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
          <HeroImage />
          <FirstBlock />
          <WideJumbo />
          <SecondBlock />
          <Footer />
      </div>
    );
  }
}

export default Home;
