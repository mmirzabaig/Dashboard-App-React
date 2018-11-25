import React, {Component} from 'react';

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
        <h1>Welcom To Main Page</h1>
      </div>
    )
  }
}

export default MainDashboard;
