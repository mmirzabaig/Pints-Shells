import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import Tab from '../Tabs';
import TacoMapContainer from '../TacoMapContainer';
import Tacos from '../Tacos'
import swal from '@sweetalert/with-react';
import '../App.css';


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

  deleteBrewTour = async (id) => {
    swal('Your Trip Has Been Deleted, Go Back To Add Another!')
    const deletedBrewTourResponse = await fetch('http://localhost:9000/brews/' + id, {
      method: 'DELETE'
    });

    const deleteBrewTourJson = deletedBrewTourResponse.json();

    this.setState({
      tourData: this.state.tourData.data.filter((tour) => tour._id !== id)
    })
  }


  componentDidMount() {
    this.getTourData().then((data) => {
      this.setState({
        tourData: data
      })
    }).catch((err) => {
      console.log(err);
    })
  }



  render() {

    const style = {
      color: 'black',
      height: '230px',
      'font-weight': 'Bold',
      border: '2px solid black',
      'max-width': '650px',
      'text-align': 'right',
      margin: '12px 0 12px 25%',

    }
    const parent = {
      'text-align': 'center',
      'max-width': '750px'
    }

    let tourData;
    if(this.state.tourData.data) {
    // <p>{item.city}</p>
    // <p>{item.state}</p>
    // <p>{item.website_url}</p>
    // <p>{item.street}</p>
    // <p>{item.phone}</p>

    tourData = this.state.tourData.data.map((item, index) => {

      return(
        <div style={style} key={item._id}  className='App'>
        <button class="ui inverted black button" onClick={this.deleteBrewTour.bind(null, item._id)}>Delete</button>
          <Tacos pos={[item.position[0].lat, item.position[0].lng]}  />
          <p>{item.name}</p>
          <p>{item.street}</p>
          <p>{item.city}</p>
          <p>{item.name}</p>
          <a href={item.website_url}>{item.website_url}</a><br/>
        </div>
      );
    })

  }
    return(
      <div className='App'>
      <div class='two column row'>
        {tourData}
      </div>
    </div>
    );
  }
}

export default BrewTour;
