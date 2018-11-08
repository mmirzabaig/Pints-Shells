import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Tacos from './Tacos';
import BrewTour from './BrewTour';
import Beer1 from './Beer1.jpg';
import BrewMap from './BrewMap';
import Tab from './Tabs';
import logo from './logo.svg';
import Map from './MapContainer';
import Header from './Header';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor() {
  super();
  this.state = {
    locations: [],
    tourData: []
  }
}


  getTourData = async () => {
    try{

      const brewTourData = await fetch('http://localhost:9000/brews');
      const brewTourDataJson = await brewTourData.json();

      return brewTourDataJson;

    } catch(err) {
      return(err)
    }
  }


getBrewData = async () => {
  try {
  const brewData = await fetch('https://api.openbrewerydb.org/breweries?by_city=austin&per_page=50');
  const brewDataJson = await brewData.json();
      console.log(brewDataJson, 'TOUR DATA APP.JS')
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

  this.getTourData().then((data) => {
    this.setState({
      tourData: data
    })
      console.log(this.state.tourData.data, 'TOUR DATA MAINE');
  }).catch((err) => {
    console.log(err);
  })
}

  render() {

    const tripContainerStyle = {
      margin: '45% 0 0 0'
    }

    return (
      <div className="App">

        <Header />

        <Switch>
          <Route exact path="/brewTour" component={BrewTour} />
        </Switch>

        <div className="findBreweryContainer" >
          <h2><Link to="/brewTour"><button class="ui inverted green button">View Your Tour</button></Link></h2>
        </div>

        <div className="mapContainer">
          <Map brewData={this.state.locations}/>
        </div>

        <div className="tripFormContainer" style={ tripContainerStyle } >
          <h1>The brewery info go here. Tacos included!</h1>
          <BrewMap tourData={this.state.tourData} />
        </div>

      </div>
    );
  }
}

export default App;
