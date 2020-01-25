import React from "react";
import { Col, Row, Container } from "../components/Grid";

import NavBar from "../components/NavBar";
import HeroImage from "../components/hero-image";
import FirstBlock from "../components/firstBlock";
import WideJumbo from "../components/wideJumbo";
import SecondBlock from "../components/secondBlock";
import Footer from "../components/footer";



function myAccount() {
  return (
    <div>
      <h1>My Account Page</h1>
      <NavBar />
      <HeroImage />
      <FirstBlock />
      <WideJumbo />
      <SecondBlock />
      <Footer />
    </div>
  );
}

export default myAccount;
