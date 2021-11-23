import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Login from "./Login";
import CreateUser from "./CreateUser";
import { isUserSignedIn } from "../utils/auth";
import { removeTokenFromLocalStorage } from "../utils/auth";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#707070",
			contrastText: "#fff",
		},
	},
});

const NavBarNew = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		setIsSignedIn(isUserSignedIn());
	});

	function logout() {
		removeTokenFromLocalStorage();
		setIsSignedIn(isUserSignedIn());
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar className='NavBar' position='relative'>
				<Toolbar>
					<Typography variant='h6' style={{ flexGrow: "1" }}>
						<Link to='/'>Home</Link>
					</Typography>
					<ul className='nav-list'>
						{isSignedIn ? (
							<>
								<li className='nav-list-item'>
									<button color='primary' onClick={logout}>
										Logout
									</button>
								</li>
								<li className='nav-list-item'>
									<button color='primary'>
										<Link to='/pages/Notes'>My Notes</Link>
									</button>
								</li>
							</>
						) : (
							<>
								<li className='nav-list-item'>
									<CreateUser />
								</li>
								<li className='nav-list-item'>
									<Login setIsSignedIn={setIsSignedIn} />
								</li>
							</>
						)}
					</ul>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default NavBarNew;
