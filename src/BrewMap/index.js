import React, { Component } from 'react';

class BrewMap extends Component {
  render() {
    console.log(this.props, 'CURRENT DATA BEN')
    // const tourData = this.props.tourData.data.map((item, index) => {
    //   return(
    //     <li key={item._id}>
    //       <p>{item.name}</p>
    //     </li>
    //   );
    // })
    return(
      <div>
        <ul>
        </ul>
      </div>
    )
  }

}
export default BrewMap;
