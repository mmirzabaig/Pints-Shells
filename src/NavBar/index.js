import React, {Component} from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react'
import BrewTour from '../BrewTour';
import { Link } from 'react-router-dom';




class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item as={ Link } to='/brews' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>

          <Menu.Item
            name='GitHub'
            active={activeItem === 'GitHub'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as={ Link } to='/brewTour' name='View Tour' active={activeItem === 'View'} onClick={this.handleItemClick} />

          <h1>Pints & Shells</h1>
          <i class="code icon"><a href="https://github.com/WBHankins93/Pints-Shells">GitHub</a></i>
        </Menu>
        
      </Segment>
    )
  }
}

export default NavBar;
