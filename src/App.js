import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './Register';
import MainDashboard from './MainDashboard';
import Navigation from './Navigation';
import Login from './Login';
import Logout from './Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
        <Switch>
         <Route exact path="/" component={MainDashboard} />
         <Route exact path="/register" component={Register} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/logout" component={Logout} />
       </Switch>
      </div>
    );
  }
}

export default App;
