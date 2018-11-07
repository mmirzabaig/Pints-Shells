import React, { Component } from 'react';

class Tacos extends Component {
  constructor(){
    super();

    this.state = {
      tacos: []
    }
  }

  getTacos = async () => {
    try {


      const tacosData = await fetch('https://developers.zomato.com/api/v2.1/search?lat=30.3005&lon=-97.7388&radius=1609.34&category=taco&sort=real_distance', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'user-key': 'b444031ab9fe38897f23e9ccf030c753'
        }
      });
      const tacosDataJson = await tacosData.json();
      console.log(tacosDataJson, 'TACOS')
      return tacosDataJson;
    } catch(err) {
      return(err)
    }
  }

  componentDidMount(){
    this.getTacos().then((item) => {


    }).catch((err) => {
      console.log(err)
    })
  }

  render(){
    return(null);
  }
}

export default Tacos;
