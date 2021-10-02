import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

/* where to set the breakpoint in nav bar? 
need to also include close for the mobile responsive version?
hamburger icon for mobile responsive setting?*/

const navbar = (props) => {
	return (
		<Container>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='./landing'>Home</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='nav-links'>
							<Nav.Link href='../Pages/Excavhist'>Excavation History</Nav.Link>
							<Nav.Link href='../Pages/About'>About Archaeology</Nav.Link>
							<Nav.Link href='../Pages/Oneota'>Oneota Prehistory</Nav.Link>
							<Nav.Link href='../Pages/Research'>Ongoing Research</Nav.Link>
							<Nav.Link href='../Pages/PhotoGallery'>Photo Gallery</Nav.Link>
							<Nav.Link href='../Pages/Technology'>Technology at Site</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href='/login'>Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Container>
	);
};

export default navbar;
