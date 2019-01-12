import React, { Component } from 'react';


const Logout = async () => {
    try {
      const logout = await fetch('http://localhost:9000/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await logout;
      if (parsedResponse === 'logout successful') {
        this.history.push('/');
      } else {
        alert('login unsuccessful');
      }
    } catch(err) {
      console.log(err);
    }
}

export default Logout;
