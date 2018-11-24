import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainDashboard from './MainDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>REact app</h1>
        <MainDashboard />
      </div>
    );
  }
}

export default App;
