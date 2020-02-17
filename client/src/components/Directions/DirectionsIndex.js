import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponentAsync from "./DirectionsRenderComponent";
import { G_API_URL } from "../../utils/constants";
import DummyLocations from "../../utils/dummyLocations";
// const styles = require('../../../../client/GoogleMapStyles.json');
const { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } = require("react-google-maps");



class Directions extends Component {
  // static propTypes = {endCoords: PropTypes.object , startCoords: Proptypes.object};
  // static defaultProps = {endCoords: {}, startCoords:{}}
  // state = {
  //   defaultZoom: 4,
  //   map: null,
  //   center: {
  //     lat: 30.266666,
  //     lng: -97.733330
  //   },
  //   directions: null
  // };
  componentDidUpdate() {
    // this.searchTrip();
    console.log(this.props);
    const directionsService = new window.google.maps.DirectionsService();
    const origin2 = {lat: 34.168250, lng:-111.931710 }
    const destination2 = {lat:33.211288, lng: -111.740112  }
    // const origin = { lat: this.props.startCoords.lat, lng: this.props.endCoords.lng };
    const origin = this.props.startCoords;
    console.log("this.props from DirectionsIndex.js: ", this.props)
    console.log("startCoords from DirectionsIndex.js", origin);
    // const destination = { lat: this.props.endCoords.lat, lng: this.props.endCoords.lng };
    const destination = this.props.endCoords;

    console.log("destination", destination);
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.props.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
  }
  render() {
    // const { props, state } = this,
    //   { googleMapsApi, mapStyles, ...otherProps } = props;
    // const GoogleMapExample = withGoogleMap
    return (
      <GoogleMap
        defaultZoom={this.props.defaultZoom}
        center={this.props.center}
        defaultCenter={new window.google.maps.LatLng(30.266666, -97.733330)}
        // styles={mapStyles}
      >
        {/* make sure to pass down lat and lon from parent component. 
        note: because this is a class component, props can be accessed
        anywhere on this page simply by this.props */}
        {/* <Marker
          position={{ lat: -34.397, lng: 150.644 }}
        /> */}
        <DirectionsRenderer directions={this.props.directions} />
      </GoogleMap>
    );
  }
};


export default compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  // StyledMap
)(Directions);