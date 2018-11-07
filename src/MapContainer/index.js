import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import './Map.css';

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
          <Button onClick={console.log('hello')} color="blue">Add to Brew Tour</Button>
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
