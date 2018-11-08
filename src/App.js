import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Tacos from './Tacos';
import BrewTour from './BrewTour';
import Beer1 from './Beer1.jpg';
import BrewMap from './BrewMap';
import logo from './logo.svg';
import Map from './MapContainer';
import Header from './Header';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Brewery from './MainComponent';

class App extends Component {


  render() {

    return (
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/brews" component={Brewery}/>
      </Switch>
      </div>
    );
  }
}

export default App;
