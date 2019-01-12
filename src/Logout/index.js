import React, { Component } from 'react';


class Logout extends Component {

  constructor() {
    super();
  }

  logoutF = async () => {
    try {
      const logout = await fetch('http://localhost:9000/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await logout.json();

      console.log(parsedResponse.data, 'DATAAAA')
      if (parsedResponse.data === 'logout successful') {
        this.props.history.push('/');
        alert('login successful');
      } else {
        this.props.history.push('/');
        alert('login unsuccessful');
      }
      } catch(err) {
        console.log(err);
      }

  }

  componentDidMount() {
    this.logoutF();
  }

  render(){
    return (null);
  }
}

export default Logout;
