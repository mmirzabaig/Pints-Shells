import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import ReactDOM from "react-dom";

 import { GoogleApiWrapper, InfoWindow, Map, Marker, Content } from 'google-maps-react';

  class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }

  }

  onMarkerClick = (props, marker, e) => {

    console.log(props)
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

  onInfoWindowOpen(props, e) {
    const button = (
      <Button color="blue" onClick={
        this.addTour.bind(null, this.state.info)
        }
      >Add to Brew Tour</Button>
    );
    ReactDOM.render(
      React.Children.only(button),
      document.getElementById("aTour")
    );
  }

  addTour = async (brewery, e) => {
    e.preventDefault();
    let jsonObj = {
      name: brewery.name,
      phone: brewery.phone,
      street: brewery.street,
      city: brewery.city,
      state: brewery.state,
      phone: brewery.phone,
      website_url: brewery.website_url
    }
    console.log(jsonObj, 'MIRZA');
    try {
      const addedBrewery = await fetch('http://localhost:9000/brews', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(jsonObj),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch(err){
      console.log('error')
      console.log(err)
    }
  }

  render() {





    const style = {
      width: '40%',
      height: '40%',
      left: '5%',
      position: 'fixed'
    }
    return (
      <div>
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = {11 }
        initialCenter = {{ lat: 30.3005, lng: -97.7388 }}
      >


      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw"
})(GoogleMapsContainer)
