import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";

const ProfileScreen = ({ location, history }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading, error, success } = userUpdate;

	useEffect(() => {
		if (!userInfo) {
			history.push("/");
		} else {
			setName(userInfo.name);
			setEmail(userInfo.email);
		}
	}, [history, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();

		dispatch(updateProfile({ name, email, password }));
	};

	return (
		<MainScreen title='EDIT PROFILE'>
			<div>
				<Row className='profileContainer'>
					<Col md={6}>
						<Form onSubmit={submitHandler}>
							{loading && <Loading />}
							{success && (
								<ErrorMessage variant='success'>
									Updated Successfully
								</ErrorMessage>
							)}
							{error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
							<Form.Group controlId='name'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter User Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group controlId='email'>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									type='email'
									placeholder='Enter Email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group controlId='password'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									placeholder='Enter Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								></Form.Control>
							</Form.Group>
							<Form.Group controlId='confirmPassword'>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									type='password'
									placeholder='Confirm Password'
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								></Form.Control>
							</Form.Group>{" "}
							<Button type='submit' varient='primary'>
								Update Profile
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		</MainScreen>
	);
};

export default ProfileScreen;
