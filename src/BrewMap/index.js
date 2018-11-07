import React, { Component } from 'react';

class BrewMap extends Component {
  render() {
    let tourData = 'hello'
    if(this.props.tourData.data) {
    console.log(this.props, 'CURRENT DATA BEN')

    tourData = this.props.tourData.data.map((item, index) => {
      return(
        <li key={item._id}>
          <p>{item.name}</p>
        </li>
      );
    })

  }
    return(
      <div>
        <ul>
        {tourData}
        </ul>
      </div>
    )
  }

}
export default BrewMap;
