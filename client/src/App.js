
import Trips from "./pages/trips";

// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import Jumbotron from "./components/Jumbotron"

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
      <NavBar />
        <Jumbotron />
      </header>
    </div>
  );
}

export default App;