import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

function Footer() {
    return (

        <div class="footerStyle">
        <div className="container footer text-center">

            <footer className="navbar navbar-expand-lg navbar-dark footer">

                <Link to="/#">

                <a className="navbar-brand" href="#">
                    <img src={ require('../images/trippin2x-white.png') } height="60" alt="" id="logo" />
                </a>
                </Link>

                <ul className="nav mx-auto" id="footerLinks">


                    <Link to="/">
                        <li className="nav-item footerLinks">
                            Home
                        {/* <a className="nav-link footer-link" href="#">Home</a> */}
                        </li>
                    </Link>

                    <Link to="/trips">
                        <li className="nav-item footerLinks">
                            Plan Your Trip
                        {/* <a className="nav-link footer-link" href="#">Plan Your Trip</a> */}
                        </li>
                    </Link>
                    <Link to="/myAccount">
                        <li className="nav-item footerLinks">
                            Account
                        {/* <a className="nav-link footer-link" href="#">Account</a> */}
                        </li>
                    </Link>
                </ul>

            </footer>
            </div>

        </div>
    );
}

export default Footer;