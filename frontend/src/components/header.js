import React, { useEffect } from "react";
import {
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

	useEffect(() => {}, [userInfo]);

	return (
		<Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
			<Container>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='m-auto'>
						{userInfo && (
							<Form inline>
								<FormControl
									type='text'
									placeholder='Search'
									className='mr-sm-2'
									onChange={(e) => setSearch(e.target.value)}
								/>
							</Form>
						)}
					</Nav>
					<Nav>
						{userInfo ? (
							<>
								<NavDropdown
									title={`${userInfo.name}`}
									id='collasible-nav-dropdown'
								>
									<NavDropdown.Item href='/profile'>
										My Profile
									</NavDropdown.Item>

									<NavDropdown.Divider />
									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							</>
						) : (
							<Nav.Link href='/login'>Login</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
