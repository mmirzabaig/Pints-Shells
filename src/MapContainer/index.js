import React, { Component } from 'react';

 import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

  class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

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

    console.log(this.props.brewData);

    const markerLocations = this.props.brewData.map((item, index) => {
      return(
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Graffiti Park, Austin, TX, USA' }
          position = {{ lat: item.latitude, lng: item.longitude }}
          name = { 'Graffiti Park, Austin, TX, USA' }
        />
      )
    });



    const style = {
      width: '90%',
      height: '70%',
      position: 'relative'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 11 }
        initialCenter = {{ lat: 30.3005, lng: -97.7388 }}
      >
        {markerLocations}
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
