import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogContent } from "@material-ui/core";
import { storeTokenOnLocalStorage } from "../utils/auth";
import { useHistory } from "react-router-dom";

const CreateUser = () => {
	const history = useHistory();
	const [open, setOpen] = useState(false);
	const handleToggle = () => setOpen(!open);
	const [error, setError] = useState("");
	const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

	function handleInputChanges(event) {
		const { id, value } = event.target;

		setNewUser((previousNewUser) => ({
			...previousNewUser,
			[id]: value,
		}));
	}

	const register = (e) => {
		e.preventDefault();

		axios
			.post(`https://bookdb2.herokuapp.com/auth/signup`, newUser)
			.then((res) => {
				setOpen(false);
				storeTokenOnLocalStorage(res.data.token);
				history.push("/bookspage");
			})
			.catch(() =>
				setError("Something went wrong, try again with another email")
			);
	};

	return (
		<div>
			<button color='primary' onClick={handleToggle}>
				Create User Account
			</button>

			<Dialog onClose={handleToggle} className='dialog' open={open}>
				<h1 className='header'>Create Account</h1>
				{/* You might want to custom css this error message to show on red or something */}
				<div>{error}</div>
				<DialogContent dividers>
					<form
						onSubmit={register}
						style={{ display: "flex", flexDirection: "column", width: "350px" }}
					>
						<label>Name</label>
						<input id='name' required onChange={handleInputChanges} />
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
						<button type='submit'>Submit</button>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default CreateUser;
