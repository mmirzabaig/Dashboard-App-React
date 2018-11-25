import React, {Component} from 'react';
import ClockComponent from '../Clock';
import Giphy from '../Giphy';

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
      </div>
    )
  }
}

export default MainDashboard;
