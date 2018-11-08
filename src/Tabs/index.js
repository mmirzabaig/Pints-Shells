import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import TacoMapContainer from '../TacoMapContainer';
import ShowTour from '../ShowTour';

class TabExampleLoading extends Component {
constructor(){
  super();
  this.state = {
    props: []
  }
}


render(){
    const tabStyle = {
      color: 'blue'
    }
    console.log(this.props, 'UPDATE this are props')
    if (this.props.tourData.data) {
    const tourData = this.props.tourData.data.map((item, i) => {
      return(
        <li key={i}>
          <p>item</p>
        </li>
      );
    })
  }

  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane style={tabStyle}> {<ShowTour />}</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>NOT WORKING</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]


  const TabExampleLoading = () => <Tab panes={panes} />
  return(
    <div>
      {TabExampleLoading()}
    </div>
  );
}


}
export default TabExampleLoading
