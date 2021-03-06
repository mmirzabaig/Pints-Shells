import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Tacos from '../Tacos';
import BrewTour from '../BrewTour';
import Map from '../MapContainer';


class Brewery extends Component {
  constructor(){
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
    this.getTacos(data.latitude, data.longitude)

    this.setState(prevState => ({
      locations: [...prevState.locations, data]
    }));
} catch(err) {
    return(err)
}
}


getTacos = async (lat, lng) => {
  try {


    const tacosData = await fetch('https://developers.zomato.com/api/v2.1/search?lat='+ lat +'&'+ lng +'&radius=1609.34&count=10&category=taco&sort=real_distance', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'user-key': 'b444031ab9fe38897f23e9ccf030c753'
      }
    });
    const tacosDataJson = await tacosData.json();

    return tacosDataJson;
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

  }).catch((err) => {
    console.log(err);
  })
}

  render() {

    const tripContainerStyle = {
      marginTop: '45%',
      marginLeft: '37%',
      maxWidth: '400px',
      position: 'relative',
      color: 'black'




    }

    return (
      <div className="App">


          <div className="welcome" >

            <h3>Whats better than a nice, cold beer? A nice, cold beer with the best tacos we could find!</h3>

            <h3>With over 30+ Austin brewery locations across the city, each location has its own story,<br></br> providing unique perspectives on the history and making of off their own specialty.<br></br>

               <br></br>From the historic Celis Brewery to the Sours of Jester King, each of these breweries have a captivating story to tell.</h3>

          </div>

           <div className="mapContainer">
              <Map brewData={this.state.locations}/>
          </div>

        <div style={tripContainerStyle} className="tripFormContainer"  >
          <h1>Coming Soon: TACOS!!</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSDQD24sbGxeUPE-dvPUMcNr73W4mIAZHZUSVdU01oc3aWv8W9A"/>
        </div>

      </div>
    );
  }
}

export default Brewery;
