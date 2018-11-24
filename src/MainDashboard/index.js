import React, {Component} from 'react';
import Weather from '../Weather';

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
        <Weather />
      </div>
    )
  }
}

export default MainDashboard;
