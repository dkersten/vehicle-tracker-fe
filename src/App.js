import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import VehicleContainer from './containers/VehicleContainer.js';

const App = () => {

  const Summary = styled.p`
      width: 96%;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.3;
      color: #1F2833;
  `

  return (
    <div>
      <Summary>
        This is a work in progress, pet project built to show information about GTA Online. As of right now I have only compiled some information about the vehicles in game. Gathering the information is quite time consuming so as I (hopefully) have more time I will continue to add content and information. <NavLink to="/vehicles">Vehicles</NavLink>
      </Summary>
      <Switch>
        <Route path="/vehicles" render={() => <VehicleContainer />} />
      </Switch>
    </div>
    
  );
}

export default App;
