import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import BrewTour from './BrewTour';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Brewery from './MainComponent';

class App extends Component {


  render() {

    return (

      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/brews" component={Brewery}/>
          <Route exact path="/brewTour" component={BrewTour} />
        </Switch>
      </div>
    );
  }
}

export default App;
