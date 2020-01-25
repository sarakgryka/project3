
import Trips from "./pages/trips";

// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import WideJumbo from "./components/wideJumbo"
import SecondBlock from "./components/secondBlock"
import Footer from "./components/footer"
import HeroImage from "./components/hero-image"
import FirstBlock from "./components/firstBlock"

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
      <NavBar />
      <HeroImage />
          <FirstBlock />
          <WideJumbo />
          <SecondBlock />
          <Footer />
      </header>
    </div>
  );
}

export default App;