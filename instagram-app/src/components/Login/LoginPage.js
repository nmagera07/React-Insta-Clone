import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  

  render() {
    return (
      <Form className="login-form">
        <h3>Welcome to React Insta Clone</h3>
        <div>Please Login</div>
        <FormGroup>
          <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <button  onClick={this.handleLoginSubmit}>
            Log In
          </button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
