import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './Register';
import MainDashboard from './MainDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
         <Route exact path="/" component={MainDashboard} />
         <Route exact path="/register" component={Register} />
       </Switch>
      </div>
    );
  }
}

export default App;
