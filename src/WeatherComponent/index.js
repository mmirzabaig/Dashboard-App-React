import React, {Component} from 'react';
import Form from './Form';
import Title from './Titles';
import Weather from './Weather';

const myKey = '2353484afe741655b0987976d791dcef';

class WeatherComp extends Component {
  state = {
    city: null,
    country: null,
    temperature: null,
    humidity: null,
    description: null,
    error: null,
  }

  getWeather = async (e) =>{
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // console.log('DAWAJ', props);
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${myKey}`);
    const response = await api_call.json();
    console.log(response, 'this is the response');



    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }
  render(){
    return(
      <div>
        <Title />
        <Form loadWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />

      </div>
    )
  }
}

export default WeatherComp;
