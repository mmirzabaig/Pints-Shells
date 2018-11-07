import React, { Component } from 'react';
import BrewMap from '../BrewMap';

class BrewTour extends Component {
  constructor(){
    super();

    this.state = {
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

  componentDidMount() {
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

    return(
      <BrewMap tourData={this.state.tourData} addTourData={this.getTourData}/>
    );
  }
}

export default BrewTour;
