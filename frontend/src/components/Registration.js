import React, { useState } from "react";
import RegisterAPI from "../apis/registerUser";

function RegisterUser(props) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [registerCredentials, setRegisterCredentials] = useState({
		username: "",
		password: "",
		email: "",
	});

	function handleInputChanges(event) {
		const { name, value } = event.target;
		setRegisterCredentials((previousRegisterCredentials) => ({
			...previousRegisterCredentials,
			[name]: value,
		}));
		console.log(registerCredentials);
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		RegisterAPI(registerCredentials)
			.then((response) => {
				console.log(response);
				//send the user to another page
			})
			.catch((error) => setError("Something bad happend"));
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<h3> Registration</h3>
			<h4>UserName</h4>
			<input
				type='text'
				name='username'
				required
				onChange={handleInputChanges}
			/>
			<h4>Password</h4>
			<input
				type='password'
				name='password'
				required
				onChange={handleInputChanges}
			/>
			<h4>Email</h4>
			<input type='email' name='email' required onChange={handleInputChanges} />
			{error && (
				<>
					<small style={{ color: "red" }}>{error}</small>
				</>
			)}
			<button type='submit'>Submit</button>
		</form>
	);
}

export default RegisterUser;
