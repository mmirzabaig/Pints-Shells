import React, { Component } from 'react';

class BrewLocator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      data: []
    }
  }

  componentWillReceiveProps(props) {

    this.setState({data: props});
  }

    getGeoLocation = async () => {
      try {
        await console.log(this.state.data);
        // const coordinates = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=407+Radam+Ln+Ste+F200,+Austin,+TX&key=AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw');
        // const coordinatesJson = await coordinates.json();
      } catch(err) {
        return(err)
      }
    }
    componentDidMount(){
      this.getGeoLocation().then((item) => {
        this.setState({coordinates: item})
      }).catch((err) => {
        console.log(err)
      })
    }

  render() {
    let i = 1;
    const brewLocations = this.props.locationData.map((item, index) => {

      if(item.street.length > 3) {
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
    }
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
