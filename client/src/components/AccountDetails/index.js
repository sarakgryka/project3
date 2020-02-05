import React from "react";
import "../style.css";

function AccountDetails() {
    return (
        <div>
            <div className="container account-Details">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Your Account</h1>
                        <h5>Name:</h5>
                        <p>John Doe</p>
                        <h5>Email:</h5>
                        <p>johndoe@gmail.com</p>
                        <h5>Password:</h5>
                        <p>••••••••</p>
                    </div>

                    <div className="col-md-6">
                        <img src={require("../images/profilepicture.png")} alt="profile" id="profilepic" />

                    </div>
                </div>

                <div class="saved-Trips">
                    <h2>Your Saved Trips</h2>

                    {/* <h5 className="savedTripTitle">Saved Trip One</h5>
            <div className="col-md-12 savedTrip">
                <img src="images/savedtripone.png"></img>
            </div> */}

                </div>



            </div>
        </div>
    );
}

export default AccountDetails;
