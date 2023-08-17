import React from 'react';
import RegisterPage from './components/Register/RegisterPage';
import LoginPage from './components/Login/LoginPage';
import {  Route, Switch, useLocation } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import DashboardPage from './components/Dashboard/DashboardPage';
import PreLoginNav from './components/Navigation/NavBar';
import NotFoundPage from './components/NotFoundPage';


function App() {
  const location = useLocation(); // Get the current location

  // Conditionally render NavigationBar for '/' and '/login' paths
  const shouldRenderNavigationBar = location.pathname === '/' || location.pathname === '/login';

  return (
    <div>
      {shouldRenderNavigationBar && <PreLoginNav />} {/* Conditionally render NavigationBar */}
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
          
        <Route exact path="/login" component={LoginPage} />
            
        <Route exact path="/signup" component={RegisterPage} />

        <Route exact path="/dashboard" component={DashboardPage} />

        <Route component={NotFoundPage}/>
         
      </Switch>
    </div>
  );
}

export default App;
