import React, {Component} from 'react';
import Weather from '../WeatherComponent';

class MainDashboard extends Component{
  constructor(){
    super();
    this.state ={
      data: ''
    }
  }

  render(){
    return(
      <div>
        <h1>Main Page</h1>
        <p>----------------------------------------------------</p>
        <Weather />
      </div>
    )
  }
}

export default MainDashboard;
