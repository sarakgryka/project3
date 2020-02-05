import React from "react";
import "../style.css";
import { useAuth0 } from "../../react-auth0-spa";

function SecondBlock() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div>

            <div className="container secondBlock">
                <div className="card">
                    <div className="row ">

                        <div className="col-md-5 px-6">
                            <div className="card-block px-3">
                                <h2 className="card-title">Create Your Account</h2>
                                <p className="card-text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. </p>




                            </div>
                        </div>
                        <div className="col-md-1"></div>
                       
                        
                        <div className="col-md-4">
                            {!isAuthenticated && (
                                <button className="btn btn-primary create-account-btn" onClick={() => loginWithRedirect({})}>CREATE ACCOUNT</button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>

    );
}

export default SecondBlock;