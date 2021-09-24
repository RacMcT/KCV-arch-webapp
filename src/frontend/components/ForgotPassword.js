// from tutorial blog
//change from material ui to bootstrap form/links when functional?!

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Navbar from '../components/Navbar';

// import {
//   LinkButtons,
//   SubmitButtons,
//   registerButton,
//   homeButton,
//   forgotButton,
//   inputStyle,
//   HeaderBar
// } from '../components'

const title = {
  pageTitle: 'Forgot Password Screen',
};

class ForgotPassword extends Component {
  constructor(){
    super();

    this.state ={
      email: ''
      showError: false,
      messageFromServer: '',
    };
  }

  handleChange = name => event => {
    [name]: event.target.value,
  });
};

sendEmail = e => {
  e.preventDefault();
  if (this.state.email) === '',
  this.setState({
    showError: false,
    messageFromServer: '',
  });
  else {
    axios.post('http://localhost:3003/forgotPassword',{
      email: this.state.email,
    })
    .then(response => {
      console.log(response.data);
      

    })
    
    
    )
  }
}

}