import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './MapContainer';
import Header from './Header';
import BrewLocator from './BrewLocator';
import BreweryContainer from './BreweryContainer';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
      <Header />

        <div className="findBrewery">
          <h2>Search for breweries here</h2>
        </div>

        <div className="map">
          <Map />
        </div>

        <div className="brewsList">
        <BreweryContainer />
        </div>

      </div>
    );
  }
}

export default App;
