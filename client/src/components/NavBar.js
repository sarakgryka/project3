// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./style.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/#">
    

        <img src={ require('./images/trippin2x.png') } height="60" alt="" id="logo" />
      
      </Link>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="nav">

        {isAuthenticated && <><Link to="/trips">
            <li className="nav-item">
              Plan Your Trip
            </li>
          </Link>

          <Link to="/myAccount">
            <li className="nav-item">
              Account
            </li>
          </Link></>}


          {/* <Link to="/trips">
            <li className="nav-item">
              Plan Your Trip
            <a className="nav-link active" href="#">Plan Your Trip</a>
            </li>
          </Link>

          

          <Link to="/myAccount">
            <li className="nav-item">
              Account
            <a className="nav-link" href="#">Account</a>
            </li>
          </Link> */}
        </ul>
      </div>

      <div>
        {!isAuthenticated && (
          <button className="btn btn-primary" id="navlogin" onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button className="btn btn-primary" onClick={() => logout()}>Log out</button>}
      </div>
    </nav>
    </div>
  );
};

export default NavBar;