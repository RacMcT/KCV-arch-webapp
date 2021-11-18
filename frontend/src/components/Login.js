import React, { useState } from "react";
import loginApi from "../apis/login";

function Login(props) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	function handleInputChanges(event) {
		const { name, value } = event.target;
		setCredentials((previousCredentials) => ({
			...previousCredentials,
			[name]: value,
		}));
		console.log(credentials);
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		loginApi(credentials)
			.then((response) => {
				console.log(response);
				//send the user to another page
			})
			.catch((error) => setError("Something bad happend"));
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<h3> Login</h3>

			<h4>Email</h4>
			<input type='email' name='email' required onChange={handleInputChanges} />
			<h4>Password</h4>
			<input
				type='password'
				name='password'
				required
				onChange={handleInputChanges}
			/>
			{error && (
				<>
					<small style={{ color: "red" }}>{error}</small>
				</>
			)}
			<button type='submit'>Submit</button>
		</form>
	);
}

export default Login;

//   getUserInfo() {
//   // LoginAPI
// // handle button click of login form
// // const handleLogin = () => {
// //   setError(null);
// //   setLoading(true);
// }

// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = e => {
//     setValue(e.target.value);
//   return {
//     value,
//     onChange(handleChange)
//   }
// }
// }
