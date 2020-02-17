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
                                <p className="card-text">Before using Trippin', please log in or create an account. Then you'll have access to all the functionality that Trippin' has to ofer. </p>




                            </div>
                        </div>
                        <div className="col-md-1"></div>
                       
                        
                        <div className="col-md-4">
                            
                            <button className="btn btn-primary create-account-btn" onClick={() => loginWithRedirect({})}>CREATE ACCOUNT</button>
                            
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