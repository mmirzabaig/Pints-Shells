import React, { Component } from 'react';

class BrewLocator extends Component {


  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      data: []
    }
  }





  render() {
    let i = 1;
    const brewLocations = this.props.locationData.map((item, index) => {


      i++;
      return  (
        <div key={index} >
          <h2><p>{i}</p></h2>
          <h2><p>{item.name}</p></h2>
          <h2><p>{item.street}</p></h2>
          <h2><p>{item.city}</p></h2>
          <h2><p>{item.state}</p></h2>
          <h2><p>{item.website_url}</p></h2>
          <h2><p>Longitude: {item.longitude}</p></h2>
          <h2><p>Latitude: {item.latitude}</p></h2>
        </div>
      )
    
    });
    return(
      <div>
        <h1>HELLO</h1>
        <ul>{brewLocations} <br/> <br/> </ul>
      </div>
    );
  }
}

export default BrewLocator;
