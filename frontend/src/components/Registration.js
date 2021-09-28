import React, { Component } from 'react';
import axios from 'axios';
import registerUser from '..apis/registerUser';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      email: '',
    };
  }

  registerUserInfo() {registerUser}
  
  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const { name, password, email } = this.state;

    axios.post('/', { name, password, email })
      .then((result) => {
        //access the results here....
      });
  }

  render() {
    const { name, password, email } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm; 
  

