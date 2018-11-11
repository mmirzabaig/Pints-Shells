import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import ReactDOM from "react-dom";

 import { GoogleApiWrapper, InfoWindow, Map, Marker, Content } from 'google-maps-react';

  class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'CONSTRUCTOR PROPS')
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


    console.log(this.props  , 'MAP PROPS')
    const tacoMarkers = this.props.tacos.restaurants.map((item) => {
      console.log(item.restaurant.location.longitude)
      return(
        <Marker
          onClick = { this.onMarkerClick }
          position = {{ lat: item.restaurant.location.latitude, lng: item.restaurant.location.longitude }}
          icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        />
      )
    })



    const style = {
      width: '20%',
      height: '20%',
      left: '5%',
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
        zoom = {9 }
        initialCenter = {{ lat: 30.3005, lng: -97.7388 }}
      >
      <Marker
        onClick = { this.onMarkerClick }
        position = {{ lat: this.props.pos[0], lng: this.props.pos[1] }}
      />

      {tacoMarkers}


      </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw"
})(GoogleMapsContainer)
