import React from 'react';
import { Header } from 'semantic-ui-react';
import BrewTour from '../BrewTour';
import './Header.css';
import { Link } from 'react-router-dom';


const HeaderApp = () => {
  return (
    <Header>
      <h1>Pints & Shells</h1>
      <ul>
        <li><Link to="/">Logout</Link></li>
        <li></li>
      </ul>
    </Header>
    )
}

export default HeaderApp;
