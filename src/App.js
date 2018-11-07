import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import logo from './logo.svg';
import Map from './MapContainer';
import Header from './Header';
import BrewLocator from './BrewLocator';
import './App.css';

class App extends Component {

  constructor() {
  super();
  this.state = {
    locations: []
  }
}

getBrewData = async () => {
  console.log('skdksdbklsdksd');
  try {
  const brewData = await fetch('https://api.openbrewerydb.org/breweries?by_city=austin&per_page=50');
  const brewDataJson = await brewData.json();
  return brewDataJson
  } catch(err) {
    return(err)
  }
}
getGeoLocation = async (data,  index) => {
try {

    const coordinates = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+ data.street + 'Austin,+TX&key=AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw');
    const coordinatesJson = await coordinates.json();
    data.latitude = coordinatesJson.results[0].geometry.location.lat;
    data.longitude = coordinatesJson.results[0].geometry.location.lng;


    this.setState(prevState => ({
      locations: [...prevState.locations, data]
    }));
} catch(err) {
    return(err)
}
}
componentDidMount() {
  this.getBrewData().then((data) => {
    for ( let i = 0; i < data.length; i++ ) {
      if(data[i].street.length > 3) {
        const street = data[i].street.split(' ').join('+');
        data[i].street = street;
        this.getGeoLocation(data[i], i)
    }
    }


  }).catch((err) => {
    console.log(err)
  })
}

  render() {
    return (
      <div className="App">
      <Header />

        <div className="findBrewery">
          <h2>Search for breweries here</h2>
        </div>

        <div className="map">
          <Map brewData={this.state.locations}/>
        </div>

        <div className="brewsList">
        <h1>The brewery info go here. Tacos included!</h1>
        <Button color="red">View Your Favorite Breweries</Button>
        <BrewLocator locationData={this.state.locations} />
        </div>

      </div>
    );
  }
}

export default App;
