import '../style.css';
import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { useAuth0 } from '../../react-auth0-spa';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import DeleteBtn from '../DeleteBtn';

function AccountDetails(props) {
  const { loading, user } = useAuth0();
  const [trips, setTrips] = useState([]);
  const [viewTrip, setViewTrip] = useState({});

  useEffect(() => {
    console.log('useEffect() is still running');

    API.getAllTrips(user).then(res => {
      console.log('user: ', user);
      console.log('res: ', res);
      console.log('trips: ', trips);
      setTrips(res);
    });
  }, []);
  //* The empty array above means this only gets called on the initial mount.
  //* Making it the same as componentDidMount() from classes.

  const handleDelete = useCallback(id => {
    API.deleteTrip(id).then(data => {
      console.log('data: ', data);
      API.getAllTrips(user).then(res => {
        console.log('API getAllTrips Res: ', res.data);
        setTrips(res);
      });
    });
  });

  const getTripInfo = async id => {
    await API.getTrip(id).then(data => {
      setViewTrip({ ...data });
    });
  };

  const handleView = id => {
    getTripInfo(id);
  };

  return (
    <div>
      <div className="container account-Details">
        <div className="row">
          <div className="col-md-6">
            <Fragment>
              <h1>Your Account</h1>

              <h5>Username:</h5>
              <p>{user.nickname}</p>
              <h5>Email:</h5>
              <p>{user.email}</p>
            </Fragment>
          </div>

          <div className="col-md-6">
            <img src={require('../images/profilepicture.png')} alt="profile" id="profilepic" />
          </div>
        </div>

        <div class="saved-Trips">
          <h2>Your Saved Trips</h2>

          {console.log('trips.data: ', trips.data)}

          <div className="col-md-12 savedTrip">
            {trips.data
              ? trips.data.map(trip => (
                  <div key={trip._id}>
                    <h5>Start Location: {trip.start}</h5>
                    <h5>End Location: {trip.end}</h5>
                    <Link to={{ pathname: '/trips', trip: { tripId: trip._id, user: user.nickname } }}>View Trip    </Link>
                    <DeleteBtn _id={trip._id} handleDelete={handleDelete} />
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
