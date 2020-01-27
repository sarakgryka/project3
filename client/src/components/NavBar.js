// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="./images/TRIPPIN2@2x.png" height="60" alt="" id="logo"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="nav">

          <Link to="/trips">
            <li className="nav-item">
              Plan Your Trip
            {/* <a className="nav-link active" href="#">Plan Your Trip</a> */}
            </li>
          </Link>

          <Link to="/myAccount">
            <li className="nav-item">
              Account
            {/* <a className="nav-link" href="#">Account</a> */}
            </li>
          </Link>
        </ul>
      </div>

      <div>
        {!isAuthenticated && (
          <button className="btn btn-primary" onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button className="btn btn-primary" onClick={() => logout()}>Log out</button>}
      </div>
    </nav>
  );
};

export default NavBar;