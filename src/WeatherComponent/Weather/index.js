import React, {Component} from 'react';
import './style.css';
const Weather = (props) =>{
console.log(props, 'second')

  const WeatherCondition = () =>{
    console.log(document.body.style, 'LOL');
    const weatherDescription = {
      'clear sky': {
        'url': 'https://sg.fiverrcdn.com/photos/116492928/original/50c60cafd1d4cc926c01e50636da8ed13c190bdd.jpg?1535742086',
        'id': [800, 801, 802, 803, 804]
      },
      'haze': {
        'url': 'https://d33jqrhnfd45wd.cloudfront.net/affa2709-2bf9-4229-a41a-3a50a7f8a5b3',
        'id': [701, 711, 721, 741, 731, 310]
      },
    }
    for ( let key in weatherDescription ) {
      if(Array.isArray(weatherDescription[key].id)) {
        console.log(weatherDescription[key].id, 'KEEEYYYS')
        for ( let i = 0; i < weatherDescription[key].id.length; i++ ) {

          if ( weatherDescription[key].id[i] === props.id ) {
            document.body.style.backgroundImage = 'url('+ weatherDescription[key].url +')'
          }
        }
      }
    }
  }

  // componentWillMount(){
  //   if(props.description === 'clear sky'){
  //     console.log(props.description, 'qwerty')
  //     return(
  //       <div className="background">
  //         <img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/VDqsD3BFgik17rh2q/natural-background-white-clouds-running-blue-clear-sky-summer-sunny-day-time-lapse-footage_sybl0fmw__F0004.png" />
  //       </div>
  //     )
  //   }
  // }
  return(
    <div>
      {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions:  {props.description}</p>}
      {props.error && <p>{props.error}</p>}
      {console.log('first', props)}
      {props.description !== null ? WeatherCondition(): null}
    </div>
  )
}

export default Weather;
