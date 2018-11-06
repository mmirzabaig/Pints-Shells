import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

import '../index.css';

class BrewLocator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: [],
      data: []
    }
  }


    getGeoLocation = async () => {
      try {
        let dataArray = ['13187+Fitzhugh+Rd', '6548+Comanche+Trl+Ste+301', '5700+Interstate+Blvd']
        let array = [];
        for ( let i = 0; i < dataArray.length; i++ ) {
          const coordinates = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+ dataArray[i] + 'Austin,+TX&key=AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw');
          const coordinatesJson = await coordinates.json();
          array.push(coordinatesJson);
          console.log(coordinatesJson, 'JSON');
        }

        return array;

      } catch(err) {
        return(err)
      }
    }
    componentDidMount(){
      this.getGeoLocation().then((item) => {
        this.setState({coordinates: item})
        console.log(this.state.coordinates, 'OBJECT COORDINATES')
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
        <Card key={index}>
        <Card.Content>
            <Card.Header>{item.name}</Card.Header>
            <Card.Description>
              {item.street}<br />
              {item.city}, {item.state}<br />
              {item.website_url}<br />
              Longitude: {item.longitude}<br />
              Latitude: {item.latitude}<br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button color="green">Add to Brew Tour</Button>
          </Card.Content>
        </Card>
      )
    }
    });
    return(
      <div>
        <h1>Location of Brewery</h1>

              <ul>{brewLocations}</ul>

      </div>
    );
  }
}

export default BrewLocator;
