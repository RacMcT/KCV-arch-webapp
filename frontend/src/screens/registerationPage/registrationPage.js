import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";
import { register } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import "./registration.css";

function RegisterScreen() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error } = userRegister;

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmpassword) {
			ErrorMessage("Passwords do not match");
		} else dispatch(register(name, email, password));
	};

	return (
		<MainScreen title='REGISTER'>
			<div className='loginContainer'>
				{error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
				{loading && <Loading />}
				<Form onSubmit={submitHandler}>
					<Form.Group controlId='name'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type='username'
							value={name}
							placeholder='Enter name'
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							value={email}
							placeholder='Enter email'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							value={password}
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId='confirmPassword'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							value={confirmpassword}
							placeholder='Confirm Password'
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</Form.Group>

					<Button variant='primary' type='submit'>
						Register
					</Button>
				</Form>
				<Row className='py-3'>
					<Col>
						Already Registered? <Link to='/login'>Login</Link>
					</Col>
				</Row>
			</div>
		</MainScreen>
	);
}

export default RegisterScreen;