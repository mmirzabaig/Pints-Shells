import React from 'react';
import { Header } from 'semantic-ui-react';
import BrewTour from '../BrewTour';
import { Link } from 'react-router-dom';


const HeaderApp = () => {
  return (
    <Header>
      <h1>Pints & Shells</h1>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/brewTour">View Your Tour</Link></li>
      </ul>
    </Header>
    )
}

export default HeaderApp;
