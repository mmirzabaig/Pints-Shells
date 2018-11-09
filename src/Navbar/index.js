import React, { Component } from 'react'
import { Menu, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}>/brewTour</Menu.Item>

          <Menu.Item name='View Your Tour'
            active={activeItem === 'View Your Tour'}
            onClick={this.handleItemClick}>
            <Link to="/brewTour">View Your Tour</Link>
          </Menu.Item>

          <Menu.Item name='GitHub'
            href='//github.com/WBHankins93/Pints-Shells'
            active={activeItem === 'GitHub'}
            onClick={this.handleItemClick}>
            GitHub
          </Menu.Item>

          <Menu.Item name='Logout'
            position='right'
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}>
            <Link to="/login">Logout</Link>
          </Menu.Item>


          <Menu.Item name='Login'
            position='right'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}>
            <Link to="/">Login</Link>
          </Menu.Item>

        </Menu>
      </Segment>
    )
  }
}
