import React, { Component } from "react";
import { compose, withProps } from "recompose";
import DirectionRenderComponentAsync from "./DirectionsRenderComponent";
import { G_API_URL } from "../../utils/constants";
import DummyLocations from "../../utils/dummyLocations";
const { withScriptjs, withGoogleMap, GoogleMap, Marker } = require("react-google-maps");
class Directions extends Component {
  state = {
    defaultZoom: 4,
    map: null,
    center: {
      lat: 30.266666,
      lng: -97.733330
    }
  };
  render() {
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        defaultCenter={new window.google.maps.LatLng(30.266666, -97.733330)}
      >
        {/* make sure to pass down lat and lon from parent component. 
        note: because this is a class component, props can be accessed
        anywhere on this page simply by this.props */}
        <Marker
      position={ {lat: this.props.endCoords.lat, lng: this.props.endCoords.lng }}
    />
      <Marker
      position={{lat: this.props.startCoords.lat, lng: this.props.startCoords.lng }}
    />
        {/* {DummyLocations.map((elem, index) => {
          return (
            <DirectionRenderComponentAsync
              key={index}
              index={index + 1}
              strokeColor={elem.strokeColor}
              from={elem.from}
              to={elem.to}
            />
          );
        })} */}
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Directions);