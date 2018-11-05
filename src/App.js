import React, { Component } from 'react';
import logo from './logo.svg';
import Map from './MapContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello I am alive!!!!</h1>
        <div className="mapContainer">
        <Map />
        </div>
      </div>
    );
  }
}

export default App;
