import React from 'react';
import RegisterPage from './components/Register/RegisterPage';
import LoginPage from './components/Login/LoginPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from './components/WelcomePage';


function App() {
  return (
    <>
     <Router>
        <Switch>
          <Route path="/" >
            <WelcomePage />
          </Route>
          <Route path="/login" >
              <LoginPage />
            </Route>
          <Route path="/signup">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
