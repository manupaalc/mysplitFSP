import React from 'react';
import RegisterPage from './components/Register/RegisterPage';
import LoginPage from './components/Login/LoginPage';
import {  Route, Switch } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import DashboardPage from './components/Dashboard/DashboardPage';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
          
        <Route exact path="/login" component={LoginPage} />
            
        <Route exact path="/signup" component={RegisterPage} />

        <Route exact path="/dashboard" component={DashboardPage} />
         
      </Switch>
    </div>
  );
}

export default App;
