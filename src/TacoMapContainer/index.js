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
    e.preventDefault();
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
          name = { item.restaurant.name }
          location = { item.restaurant.location.address }
          menu_url = { item.restaurant.menu_url }
        />
      )
    })



    const style = {
      width: '300px',
      height: '300px',
      left: '5%',
      position: 'fixed',
      borderRadius: '50%',
      border: '2px solid black',
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
        initialCenter = {{ lat: this.props.pos[0], lng: this.props.pos[1] }}
      >
      <Marker
        onClick = { this.onMarkerClick }
        position = {{ lat: this.props.pos[0], lng: this.props.pos[1] }}
      />

      {tacoMarkers}

      <InfoWindow

        marker = { this.state.activeMarker }
        visible = { this.state.showingInfoWindow }
        onOpen={e => {
              this.onInfoWindowOpen(e, this.props);
            }}
      >
      <content>
      <div>
      <Card>
      <Card.Content>
        <Card.Header>{this.state.info.name}</Card.Header>
        { this.state.info.location }
        { this.state.info.menu_url }
        <Card.Description>

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
