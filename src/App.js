import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './MapContainer';
import BrewLocator from './BrewLocator';
import BreweryContainer from './BreweryContainer';
import './App.css';

class App extends Component {

  constructor() {
  super();
  this.state = {
    locations: []
  }
}

getBrewData = async () => {
  try {
  const brewData = await fetch('https://api.openbrewerydb.org/breweries?by_city=austin&per_page=50');
  const brewDataJson = await brewData.json();
  return brewDataJson
  } catch(err) {
    return(err)
  }
}
componentDidMount() {
  this.getBrewData().then((data) => {
    for ( let i = 0; i < data.length; i++ ) {
      let street = data[i].street.split(' ').join('+');
      data[i].street = street;
    }
    this.setState({locations: data})

  }).catch((err) => {
    console.log(err)
  })
}
  render() {
    return (
      <div className="App">
        <h1>Welcome to Pints & Shells!</h1>

        <div className="findBrewery">
          <h2>Search for breweries here</h2>
          <BreweryContainer />
        </div>

        <div className="map">
          <Map />
        </div>

        <div className="brewsList">
          <BrewLocator locationData={this.state.locations} />
        </div>

      </div>
    );
  }
}

export default App;
