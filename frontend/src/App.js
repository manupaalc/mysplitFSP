import React from 'react';
import RegisterPage from './components/Register/RegisterPage';
import LoginPage from './components/Login/LoginPage';
import {  Route, Switch, useLocation } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import DashboardPage from './components/Dashboard/DashboardPage';
import PreLoginNav from './components/Navigation/NavBar';
import NotFoundPage from './components/NotFoundPage';
import CreateGroupPage from './components/Group/CreateGroupPage';
import GroupDetails from './components/Group/GroupDetails';
import LeftColumn from './components/Dashboard/LeftColumn';
import FriendDetails from './components/Friend/FriendDetails';


function App() {
  const location = useLocation(); // Get the current location

  // Conditionally render NavigationBar for '/' and '/login' paths
  const shouldRenderNavigationBar = location.pathname !== '/signup' || location.pathname !=='/groups/new' ;
  

  return (
    <div>
      {shouldRenderNavigationBar && <PreLoginNav />} {/* Conditionally render NavigationBar */}
     
      < Route path= "/dashboard" component= {LeftColumn} />
      < Route path= "/groups/:groupId" component= {LeftColumn}/>
      < Route path="/friends/:friendId" component={LeftColumn} />

      <Switch>
        <Route exact path="/" component={WelcomePage}/>
          
        <Route exact path="/login" component={LoginPage} />
            
        <Route exact path="/signup" component={RegisterPage} />

        <Route path="/dashboard" component={DashboardPage} />

        <Route exact path="/groups/new" component={CreateGroupPage} />

        <Route path="/groups/:groupId" component={GroupDetails}/>

        <Route path="/friends/:friendId" component={FriendDetails} />

        <Route component={NotFoundPage}/>
         
      </Switch>
    </div>
  );
}

export default App;
