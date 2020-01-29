import React from "react";
import "../style.css";

function FormTrip(props) {

    return (

        <form class="col-sm-12">
            <h3>Search Here</h3>
            <div class="form-row">

                <input
                    type="text"
                    value={props.startPoint}
                    class="form-control search-loc location"
                    placeholder="Starting point..."
                    id="startPoint"
                />


                <input
                    type="text"
                    value={props.endPoint}
                    class="form-control search-loc location"
                    placeholder="End point..."
                    id="endPoint"

                />

                <button type="button" class="btn btn-warning hvr-sweep-to-right" id="searchButton">Search<i class="fas fa-search"></i></button>
            </div>
           


        </form >
    );
}

export default FormTrip;

