import React from "react";
import "../style.css";

function TripSearchResults() {
    return (


        <div className="container listSearchResults">

            <div className="row">
                <div className="col-sm-12">

                    <h3>Directions:</h3>

                    <div className="directionResults">
                        <ul>
                            <li>Direction one</li>
                            <li>Direction two</li>
                            <li>Direction three</li>
                            <li>Direction four</li>
                        </ul>
                    </div>


                </div>

            </div>

            <br></br>


            <div className="row">
                <div className="col-sm">

                    <h3>Places to Stay:</h3>

                    <div className="stayResults">
                        <ul>
                            <li>Place to stay one</li>
                            <li>Place to stay two</li>
                            <li>Place to stay three</li>
                            <li>Place to stay four</li>
                        </ul>
                    </div>

                    <br></br>

                    <h3>Places to Eat:</h3>

                    <div className="eatResults">
                        <ul>
                            <li>Place to eat one</li>
                            <li>Place to eat two</li>
                            <li>Place to eat three</li>
                            <li>Place to eat four</li>
                        </ul>
                    </div>


                </div>


                <div className="col-sm">

                    <h3>Things to see along the way:</h3>

                    <div className="landmarkResults">
                        <ul>
                            <li>Landmark one</li>
                            <li>Landmark two</li>
                            <li>Landmark three</li>
                            <li>Landmark four</li>
                        </ul>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default TripSearchResults;