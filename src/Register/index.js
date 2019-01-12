import React, {Component} from 'react';
import {Form, Input} from 'reactstrap';
import './style.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      username:'',
      password:''
}
  }

  handleSubmit = async (e) => {
  e.preventDefault();
  console.log(this.state, 'MIRZA')
  const registerResponse = await fetch('http://localhost:9000/auth/register', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(this.state),
    headers:{
      'Content-Type': 'application/json'
      }
  });
  const parsedResponse = await registerResponse.json();
    if(parsedResponse.data = 'register successful'){
      // this.props.history.push('/profile');
      //window.location.assign('http://localhost:3000')
      this.props.history.push('/')
  }
}


handleChange = (e) => {
  this.setState({[e.target.name]:e.target.value});
}

  render() {
    return(
      <div>
        <div className='wrapper'>
          <div className='loginForm'>
            <h1 className='register'> Register </h1>
              <Form onSubmit={this.handleSubmit}>
                <input type='text' name='name' placeholder='name' onChange={this.handleChange}/> <br/>
                <input type='text' name='email' placeholder='email' onChange={this.handleChange}/> <br/>
                <input type='text' name='username' placeholder='username' onChange={this.handleChange}/><br/>
                <input type='password' name='password' placeholder='password' onChange={this.handleChange}/>
                <input className="registerButton" type='Submit' value='register'/>
              </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;
