import React from 'react';
import {Form, Input, Button} from 'reactstrap';

const Forms = (props) =>{
  console.log(props, 'this is props')
  return(
    <Form onSubmit={props.loadWeather}>
      <Input type="text" style={{width: '30%', left: '35%', position: 'relative'}} name='city' placeholder="City..."/>
      <Input type="text" style={{width: '30%', left: '35%', position: 'relative'}} name='country' placeholder="Country..."/>
      <Button>Get Weather</Button>
    </Form>
  )
}

export default Forms;
