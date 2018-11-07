import React from 'react';
import { Header } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';



const HeaderApp = () => {
  return (
    <Header>
      // <ul>
      //   <li>User</li>
      //   <li><h1>Pints & Shells</h1></li>
      //   <li>Login</li>
      // </ul>
      <Switch>
          // <Route exact path="/" component={Login}/>
          <Route exact path="/brewTour" component={}/>
          <h1>Pints & Shells</h1>
        </Switch>
    </Header>
    )
}

export default HeaderApp;
