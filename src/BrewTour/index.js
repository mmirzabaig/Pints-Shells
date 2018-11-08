import React, { Component } from 'react';
import BrewMap from '../BrewMap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Tab from '../Tabs';

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
        console.log(this.state.tourData.data, 'TOUR DATA MAINE');
    }).catch((err) => {
      console.log(err);
    })
  }



  render() {

    let tourData = 'hello'
    if(this.state.tourData.data) {
    console.log(this.state, 'CURRENT DATA BEN')
    // <p>{item.city}</p>
    // <p>{item.state}</p>
    // <p>{item.website_url}</p>
    // <p>{item.street}</p>
    // <p>{item.phone}</p>

    tourData = this.state.tourData.data.map((item, index) => {
      return(
        <div key={item._id}>
          <p>{item.name}</p>
          <Button onClick={this.deleteBrewTour.bind(null, item._id)} >Delete</Button>
        </div>
      );
    })

  }
    return(
      <div>
        <li><Button><Link to="/brews">Close</Link></Button></li>
      <ul>
        {tourData}
        <Tab tourData={this.state.tourData} />
      </ul>
      <p>HELLO</p>
    </div>
    );
  }
}

export default BrewTour;
