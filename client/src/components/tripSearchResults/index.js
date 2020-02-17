import React from 'react';
import '../style.css';
import { useAuth0 } from '../../react-auth0-spa';

function TripSearchResults(props) {
    const { user } = useAuth0();
    return (
        <div>
            {props.steps.length ?

                <div className="container listSearchResults">
                    <div className="row">
                        <div className="col-sm-12">
                            <button onClick={() => props.saveTrip(user.nickname)} type="button" class="btn btn-primary hvr-sweep-to-right" id="saveButton">
                                Save
                                <i class="fas fa-floppy"></i>
                            </button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Directions:</h3>

                            <div className="directionResults">
                                {props.steps.map(step => (
                                    <ul key={step.html_instructions}>
                                        <li>{step.html_instructions.replace(/<\/?[^>]+(>|$)/g, '')}</li>
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


                        </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default TripSearchResults;
