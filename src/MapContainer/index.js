import React, { Component } from 'react';

 import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

  class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: [],
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {

    const style = {
      width: '45%',
      height: '80%',
      position: 'relative'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 10 }
        initialCenter = {{ lat: 30.2762, lng: -97.7533 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Graffiti Park, Austin, TX, USA' }
          position = {{ lat: 30.2762, lng: -97.7533 }}
          name = { 'Graffiti Park, Austin, TX, USA' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >

        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw"
})(GoogleMapsContainer)
