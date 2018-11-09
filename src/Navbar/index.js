import React, { Component } from 'react'
import { Menu, Segment, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const style = {
      fontSize: '20px',
      marginBottom: '10px'
    }
    const headingStyle = {
      color: 'white',
      marginLeft: '20%'
    }

      const navBar = {
        position: 'sticky',
        top: '0',
        opacity: '0.9',
        zIndex: '2',
        fontFamily: 'Permanent Marker'
      }
         

    return (
      <div className='navBar' style={navBar}>
      <Segment inverted>

        <Menu inverted pointing secondary>
        <div className='logo'>
         <Image src={require('../images/logoCircle.png')} size='tiny' />
       </div>


          <Menu.Item name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            <Link style={style} to="/">Home</Link>
          </Menu.Item>

          <Menu.Item name='View Your Tour'
            active={activeItem === 'View Your Tour'}
            onClick={this.handleItemClick}>

            <Link style={style} to="/brewTour">View Your Tour</Link>

          </Menu.Item>

          <h1 style={headingStyle} >Pints And Shells</h1>

          <Menu.Item name='GitHub'
            position='right'
            href='//github.com/WBHankins93/Pints-Shells'
            active={activeItem === 'GitHub'}
            onClick={this.handleItemClick}>
            <Link style={style} to="">GitHub</Link>
          </Menu.Item>

          <Menu.Item name='Logout'
            active={activeItem === 'Logout'}
            onClick={this.handleItemClick}>
            <Link style={style} to="/login">Logout</Link>
          </Menu.Item>

          <Menu.Item name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}>
            <Link style={style} to="/login">Login</Link>
          </Menu.Item>

        </Menu>
      </Segment>
      </div>
    )
  }
}
