import React, { Component } from 'react';

 import { GoogleApiWrapper, InfoWindow, Map, Marker, Content } from 'google-maps-react';

  class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }

  }

  onMarkerClick = (props, marker, e) => {
    console.log(props, 'HELLO')
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      info: props

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
          key = {index}
          onClick = { this.onMarkerClick }
          title = { item.name }
          position = {{ lat: item.latitude, lng: item.longitude }}
          name = { item.name }
        />

      )
    });



    const style = {
      width: '90%',
      height: '70%',
      position: 'relative'
    }
    return (
      <div>
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
        <content>
        {this.state.info.title}
        </content>

        </InfoWindow>
      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw"
})(GoogleMapsContainer)
