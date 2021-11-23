import React, { useState } from "react";
import axios from "axios";
import { Button, Dialog, DialogContent } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { storeTokenOnLocalStorage } from "../utils/auth";

const LoginNew = (props) => {
	console.log(props);
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const handleToggle = () => setOpen(!open);
	const [error, setError] = useState("");
	const [user, setUser] = useState({ email: "", password: "" });

	function handleInputChanges(event) {
		const { id, value } = event.target;

		setUser((previousUser) => ({
			...previousUser,
			[id]: value,
		}));
	}

	const login = (e) => {
		e.preventDefault();

		axios
			.post(`http://localhost:8080/Login`, user)
			.then((res) => {
				setOpen(false);
				storeTokenOnLocalStorage(res.data.token);
				props.setIsSignedIn(true);
				history.push("/dashboard");
			})
			.catch(() => setError("Incorrect email or password"));
	};

	return (
		<div>
			<button color='primary' onClick={handleToggle}>
				Login
			</button>
			<Dialog onClose={handleToggle} className='dialog' open={open}>
				<h1 className='header'>LOGIN</h1>
				<DialogContent dividers>
					<form
						onSubmit={login}
						className='form'
						style={{ display: "flex", flexDirection: "column", width: "350px" }}
					>
						<p style={{ color: "red" }}>{error}</p>
						<label>Email</label>
						<input id='email' required onChange={handleInputChanges} />
						<label>Password</label>
						<input
							id='password'
							type='password'
							required
							onChange={handleInputChanges}
						/>
						<br />
						<Button type='submit'>Login</Button>
					</form>
					{/* <p>{setLoggedIn}</p> */}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default LoginNew;
