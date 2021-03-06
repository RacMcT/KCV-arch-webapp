import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";
import { login } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import ReCAPTCHA from "react-google-recaptcha";
import "./LoginScreen.css";

function LoginScreen({ history }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [recaptcha, onRecapchaChange] = useState("");

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const navigate = useNavigate();

	useEffect(() => {
		if (userInfo) {
			navigate("/Dashboard");
		}
	}, [navigate, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password, recaptcha));
	};

	return (
		<MainScreen title='LOGIN'>
			<div className='loginContainer'>
				{error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
				{loading && <Loading />}
				<Form onSubmit={submitHandler}>
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
					<ReCAPTCHA
						sitekey='6Lf_tWYdAAAAAO7C-9UBmOyGzIR0IWzY8LZiVUG4'
						onChange={(e) => onRecapchaChange(e)}
					/>

					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
				<Row className='py-3'>
					<Col>
						New Student User? <Link to='/register'>Register Here</Link>
					</Col>
				</Row>
			</div>
		</MainScreen>
	);
}

export default LoginScreen;
