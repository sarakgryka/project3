
import "../style.css";
import React, { Fragment, useEffect } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import API from '../../utils/API';

function AccountDetails() {
    const { loading, user } = useAuth0();
    useEffect(() => {
        console.log("useEffect() is running");
        API.getAllTrips(user.name).then((trips)=>{
            console.log(trips)
        })
    }, [])

    if (loading || !user) {
        return <div>Loading...</div>;
    }


    console.log(user);
    return (
        <div>
            <div className="container account-Details">
                <div className="row">
                    <div className="col-md-6">
                        <Fragment>
                            <h1>Your Account</h1>

                            <h5>Name:</h5>
                            <p>{user.name}</p>
                            <h5>Email:</h5>
                            <p>{user.email}</p>

                        </Fragment>
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
