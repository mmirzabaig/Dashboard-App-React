import React, {Component} from 'react';
import Form from './Form';
import Title from './Titles';
import Weather from './Weather';

class WeatherComp extends Component {
  render(){
    return(
      <div>
        <h1>Weather Component</h1>
        <Form />
        <Title />
        <Weather />
      </div>
    )
  }
}

export default WeatherComp;
