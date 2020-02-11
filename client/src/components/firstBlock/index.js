import React from "react";
import "../style.css"; 

function FirstBlock() {
    return (
        <div>

            <section className="section">
                <div className="container">
                    <div className="card">
                        <div className="row ">

                            <div className="col-md-5 px-6">
                                <div className="card-block px-3">
                                    <h2 className="card-title"> Road Trip With Ease</h2>
                                    <p className="card-text">On our "Plan Your Trips" page, you are greeted with Google Maps and a simple form where all you need to enter is your start and end location. Then let Trippin' handle the rest! </p>
                                    <p className="card-text">After submitting, you'll be presented with a Map from Google containing corresponding start and end markers and a route drawn between them. Underneath the map, Trippin' will provide you with step-by-step directions and information from your desination like local restaurants, places of interest, and nearby hotels!</p>

                                    <button href="#" className="btn btn-primary">Plan Your Trip</button>

                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4">
                                <img src={ require ("../images/planyourtrip-thumbnail.png")} class="content-image"/>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default FirstBlock;
