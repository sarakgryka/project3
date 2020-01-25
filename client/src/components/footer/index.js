import React from "react";
import "../style.css";

function Footer() {
    return (
        <div className="footer text-center">

            <footer className="navbar navbar-expand-lg navbar-dark footer">

                <a className="navbar-brand" href="#">
                    <img src="./images/TRIPPIN2@2x.png" height="60" alt="" id="footer-logo"></img>
                </a>

                <ul className="nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link footer-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link footer-link" href="#">Plan Your Trip</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link footer-link" href="#">Account</a>
                    </li>
                </ul>

            </footer>

        </div>
    );
}

export default Footer;