import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = async (e) => {

    console.log('I am trying to log in');
    const loginResponse = await fetch('http://localhost:9000/auth', {
      method: 'POST',
      credentials: 'include', // this sends our session cookie with our request
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();

    if(parsedResponse.data === 'login successful'){
      // change our component
      console.log('success login')

    }
  }
  render(){

    const style = {
      'max-width': '300px',
      'text-align': 'center'
    }

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }
    const formStyle = {
       width: '550px',
       top: '50px',
       margin: '20px auto'

    }
    const loginStyle = {
      height: '20px',
      margin: '10px'
    }

    const headingStyle = {
      color: 'black',
      'font-size': '25px',
      margin: '40px'
    }

    return (

      <div className="Login">
        <h2 style={headingStyle}>Sign in below with Facebook or Google</h2>

      <div style={loginStyle}>
        <FacebookLogin
          style={loginStyle}
          appId="2012853998969903" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>

      <br />
      <br />

      <div style={loginStyle}>
        <GoogleLogin
          clientId="522376826390-qk8a7luadtrs61f2f11lcof7f7g9agdc.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>

      <Form style={formStyle} onSubmit={this.handleSubmit}>

        <Form.Input placeholder='Username' type='text' name="username" onChange={this.handleChange} />

        <Form.Input placeholder='Password' type='password' name="password" onChange={this.handleChange} />
        <button type="Submit" class="ui inverted black button">Login</button>
      </Form>

      </div>

      )
  }
}

export default Login;
