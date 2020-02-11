import React from "react";
import "../style.css";

function TripSearchResults(props) {
    return (


        <div className="container listSearchResults">

            <div className="row">
                <div className="col-sm-12">

                    <h3>Directions:</h3>

                    <div className="directionResults">
                        {props.steps.map(step => (
                            <ul key={step.html_instructions}>
                                <li>{step.html_instructions.replace(/<\/?[^>]+(>|$)/g, "")}</li>
                            </ul>
                        ))}
                    </div>
                </div>

            </div>

            <br></br>


            <div className="row">
                <div className="col-sm-4">

                    <h3>Places to Stay:</h3>

                    <div className="stayResults">
                    {props.lodging.map(hotel => (
                            <ul key={hotel}>
                                <li>{hotel}</li>
                            </ul>
                        ))}
                    </div>
                    </div>

                    <br></br>

                    <div className="col-sm-4">

                    <h3>Places to Eat:</h3>

                    <div className="eatResults">
                    {props.restaurants.map(restaurant => (
                            <ul key={restaurant}>
                                <li>{restaurant}</li>
                            </ul>
                        ))}
                    </div>


                </div>


                <div className="col-sm-4">

                    <h3>Things to see at your destination:</h3>

                    <div className="landmarkResults">
                    {props.placesOfInterest.map(place => (
                            <ul key={place}>
                                <li>{place}</li>
                            </ul>
                        ))}
                    </div>

                    {/* <h3>Things to see along the way:</h3>

                    <div className="landmarkResults">
                        <ul>
                            <li>Landmark one</li>
                            <li>Landmark two</li>
                            <li>Landmark three</li>
                            <li>Landmark four</li>
                        </ul>
                    </div> */}


                </div>

            </div>
        </div>
    );
}

export default TripSearchResults;