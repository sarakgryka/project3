import '../style.css';
import React, { Fragment } from 'react';

function FormTrip(props) {
  return (
    <div className="container tripFormStyle">
      {/* <Fragment>
               <h3> Welcome, {user.name} ! </h3>
                </Fragment> */}

      <form className="col-sm-12">
        <h3>Search Here</h3>
        <div className="form-row">
          <div className="col">
            <input onChange={props.handleInput} type="text" value={props.startLocation} class="form-control search-loc location" placeholder="Starting point..." id="start" name="start" />
          </div>
          <div class="col">
            <input onChange={props.handleInput} type="text" value={props.endLocation} class="form-control search-loc location" placeholder="End point..." id="end" name="end" />
          </div>
          {/* <div
                   onChange={props.handleInput}
                   value={user.name}
                   id="user"
                   name="user"
                   >

                   </div> */}
          <div className="col">
            <button onClick={() => props.handleFormSubmit()} type="button" class="btn btn-primary hvr-sweep-to-right" id="searchButton">
              Search
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormTrip;
