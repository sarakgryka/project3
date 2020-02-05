import React from "react";
import "../style.css";

function FormTrip(props) {

    return (

        <div class="container tripFormStyle">

        <form class="col-sm-12">
            <h3>Search Here</h3>
            <div class="form-row">
                <div class="col">
                    <input
                        onChange={props.handleInput}
                        type="text"
                        value={props.start}
                        class="form-control search-loc location"
                        placeholder="Starting point..."
                        id="start"
                        name="start"


                    />

                </div>
                <div class="col">
                    <input
                        onChange={props.handleInput}
                        type="text"
                        value={props.end}
                        class="form-control search-loc location"
                        placeholder="End point..."
                        id="end"
                        name="end"

                    />
                </div>
        <div class="col">
                <button onClick={props.handleFormSubmit} type="button" class="btn btn-primary hvr-sweep-to-right" id="searchButton">Search<i class="fas fa-search"></i></button>
                </div>
            </div>



        </form >
        </div>
    );
}

export default FormTrip;

