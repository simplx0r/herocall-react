import React from 'react';
import Main from './Components/Main/Main';
import Login from './Components/Login/Login';
import './App.scss';
import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
    
  
    

    
      

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    
  </Router>
  );
}

export default App;
