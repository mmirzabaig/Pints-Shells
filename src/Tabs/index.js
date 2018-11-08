import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import TacoMapContainer from '../TacoMapContainer';
import ShowTour from '../ShowTour';


class TabExampleLoading extends Component {
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


componentDidMount(){
  this.getTourData().then((data) => {
    console.log(data, 'AW YEAH CURRENT DATA');
    this.setState({
      tourData: data
    })
  })
}



render(){
      console.log(this.props, 'TOUR DAAATAAAA')
//     const tabStyle = {
//       color: 'blue'
//     }
//     console.log(this.props, 'UPDATE this are props')
//     if(this.props.tourData.data) {
//     const tourData = this.props.tourData.data.map((item, i) => {
//       let pane = [
//         <div>
//           <p>{item.name}</p>
//           <p>{item._id}</p>
//         </div>
//       ]
//       return(
//
//           { menuItem: 'item.name', render: () => <Tab.Pane style={tabStyle}> {pane}</Tab.Pane> }
//       );
//     })
// }


  return(
    <div>
    </div>
  );
}


}
export default TabExampleLoading
