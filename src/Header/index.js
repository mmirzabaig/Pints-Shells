import React from 'react';
import { Header } from 'semantic-ui-react';
import BrewTour from '../BrewTour';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const HeaderApp = () => {
  return (
    <Header>
      <h1>Pints & Shells</h1>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Button><Link to="/brewTour">View Your Tour</Link></Button></li>
      </ul>
    </Header>
    )
}

export default HeaderApp;
