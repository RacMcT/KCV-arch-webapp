import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./landingPage.css";

function LandingPage() {
	const navigate = useNavigate();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (userInfo) {
			navigate("/Dashboard");
		}
	}, [navigate, userInfo]);

	return (
		<div className='main'>
			<Container>
				<Row>
					<div className='intro-text'>
						<div>
							<h1 className='title'>
								Welcome to Koshkonong Creek Village Archaeology Case Study Site
							</h1>
							<p className='subtitle'>
								All your case study project materials are found here
							</p>
						</div>
						<div className='buttonContainer'>
							<Link to='/login'>
								<Button size='lg' className='landingbutton'>
									Login
								</Button>
							</Link>
							<Link to='/register'>
								<Button
									variant='outline-primary'
									size='lg'
									className='landingbutton'
								>
									Signup
								</Button>
							</Link>
						</div>
					</div>
				</Row>
			</Container>
		</div>
	);
}

export default LandingPage;
