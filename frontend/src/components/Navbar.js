import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

/* where to set the breakpoint in nav bar? 
need to also include close for the mobile responsive version?
hamburger icon for mobile responsive setting?*/

const Navigation = (props) => {
	return (
		<Container>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<nav class='navbar navbar-expand-lg navbar-light bg-light'>
					<div class='container-fluid'>
						<button
							class='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarTogglerDemo03'
							aria-controls='navbarTogglerDemo03'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span class='navbar-toggler-icon'></span>
						</button>

						<div class='collapse navbar-collapse' id='navbarTogglerDemo03'>
							<ul class='navbar-nav me-auto mb-2 mb-lg-0 style="list-style: none;'>
								<li class='nav-item'>
									<a class='nav-link active' aria-current='page' href='../Home'>
										Home
									</a>
								</li>
								<li class='nav-item'>
									<a class='nav-link' href='../Pages/About'>
										About Archaeology
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</Navbar>
		</Container>
	);
};

export default Navigation;
