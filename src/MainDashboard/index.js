import React, {Component} from 'react';
import ClockComponent from '../Clock';
import Giphy from '../Giphy';
import Weather from '../WeatherComponent';
import './style.css';
import Navigation from '../Navigation';


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

          <ClockComponent />
          <Giphy />

          <p>----------------------------------------------------</p>
          <Weather />

      </div>
    )
  }
}

export default MainDashboard;
