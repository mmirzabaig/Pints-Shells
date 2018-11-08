import React from 'react';
import { Header } from 'semantic-ui-react';
import BrewTour from '../BrewTour';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Header.css';



const HeaderApp = () => {
  return (
    <Header>
      <h1>Pints & Shells</h1>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li></li>
      </ul>
    </Header>
    )
}

export default HeaderApp;
