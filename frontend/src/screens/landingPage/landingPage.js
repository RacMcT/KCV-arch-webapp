import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingStyles.css";

function LandingPage() {
	return (
		<div className='main'>
			<Container>
				<Row>
					<div className='intro-text'>
						<div>
							<h1 className='title'>
								Welcome to the Koshkonong Creek Village Archaeology Site Case
								Study
							</h1>
							<p className='subtitle'>
								Your Intro to Archaeology Case Study Website. All Resources you
								need to complete the project are avaialable here.
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
