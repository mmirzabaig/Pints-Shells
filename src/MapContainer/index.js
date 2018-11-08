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


    const markerLocations = this.props.brewData.map((item, index) => {
      let street = item.street.split('+').join(' ');
      return(
        <Marker
          onClick = { this.onMarkerClick }
          position = {{ lat: item.latitude, lng: item.longitude }}
          name = { item.name }
          city = {item.city}
          state = {item.state}
          website_url = {item.website_url}
          street = {street}
          phone = {item.phone}
          id = {item.id}
        />

      )
    });



    const style = {
      width: '90%',
      height: '70%',
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
        zoom = { 11 }
        initialCenter = {{ lat: 30.3005, lng: -97.7388 }}
      >
        {markerLocations}
        <InfoWindow

          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
          onOpen={e => {
                this.onInfoWindowOpen(this.props, e);
              }}
        >
        <content>
        <div>
        <Card>
        <Card.Content>
          <Card.Header>{this.state.info.name}</Card.Header>
          <Card.Description>
          {this.state.info.street}<br />
          {this.state.info.city}, {this.state.info.state}<br />
          <a href={this.state.info.website_url}>{this.state.info.website_url}</a> <br />
          Phone: {this.state.info.phone}
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div id="aTour" />
          </Card.Content>
          </Card>
          </div>
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
