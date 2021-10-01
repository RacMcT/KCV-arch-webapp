// from tutorial blog
//change from material ui to bootstrap form/links when functional?!

// import React, { Component } from 'react';
// import TextField from '@material-ui/core/TextField';
// import axios from 'axios';

// import Navbar from '../components/Navbar';
// import { render } from '@testing-library/react';

// // import {
// //   LinkButtons,
// //   SubmitButtons,
// //   registerButton,
// //   homeButton,
// //   forgotButton,
// //   inputStyle,
// //   HeaderBar
// // } from '../components'

// const title = {
//   pageTitle: 'Forgot Password Screen',
// };

// class ForgotPassword extends Component {
//   constructor(){
//     super();

//     this.state ={
//       email: '',
//       showError: false,
//       messageFromServer: '',
//     };
//   }

//   handleChange = name => event => {
//     [name]: event.target.value,
//   });
// };

// sendEmail = e => {
//   e.preventDefault();
//   if (this.state.email) === '',
//   this.setState({
//     showError: false,
//     messageFromServer: '',
//   });
//   else {
//     axios.post('http://localhost:3003/forgotPassword',{
//       email: this.state.email,
//     })
//     .then(response => {
//       console.log(response.data);
//       if (response.data === 'email not in database'){
//         this.setState({
//         showError: true,
//         messageFromServer: '',
//         });
//       } else if (response.data === 'recovery email sent'){
//         this.setState({
//           showError: false,
//           messageFromServer: 'recovery email sent',
//         });
//       }

//     })

//     .catch(error => {
//       console.log(error.data);
//     });
// }

// };

// render() {
//   const{ email, messageFromServer, showNullError, showError} = this.state;

// // make form in bootstrap and import?
// // import buttons from bootstrap and import?

//   return(
//     <div>
//       <Navbar></Navbar>
//       <form className="profile-form" onSubmit={this.sendEmail}>
//         <TextField
//         style={inputStyle}
//         id="emali"
//         label="email"
//         value={email}
//         onChange={this.handleChange('email')}
//         placeholder="Email Address"
//         >
//         </TextField>

//       <SubmitButtons
//       buttonStyle={forgotButton}
//       buttonText={'Send Password Reset Email'}
//       />
//       </form>

//     {showNullError && (
//       <div>
//         <p>The email address cannot be null.</p>
//         </div>
//     )}
//     {showError && (
//       <div>
//         <p>
//           That email address is not recognized. Please try again or register for a new account. </p>
//         <LinkButtons
//         buttonText={'Register'}
//         buttonStyle={registerButton}
//         link={'/Registration'}
//         />
//         </div>
//     )}

//     {messageFromServer==='recovery email sent' &&(
//       <div>
//         <h3>Password Reset Email Sucessfully Sent!</h3>
//         </div>
//     )}
//     <LinkButtons
//     buttonText={'Go to Home Page'}
//     buttonStyle={homeButton}
//     link={'/Home'}
//     />
//     </div>
//   );
// }

// export default ForgotPassword;
