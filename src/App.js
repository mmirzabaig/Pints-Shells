import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './MapContainer';
import BreweryContainer from './BreweryContainer';
import './App.css';

class App extends Component {
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

        </div>

      </div>
    );
  }
}

export default App;
