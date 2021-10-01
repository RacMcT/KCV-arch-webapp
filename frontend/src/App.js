import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import RegisterUser from "./components/Registration";

import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "./utils/Common";

function App() {
	const [authLoading, setAuthLoading] = useState(true);

	useEffect(() => {
		const token = getToken();
		if (!token) {
			return;
		}

		axios
			.get(`http://localhost:3000/verifyToken?token=${token}`)
			.then((response) => {
				setUserSession(response.data.token, response.data.user);
				setAuthLoading(false);
			})
			.catch((error) => {
				removeUserSession();
				setAuthLoading(false);
			});
	}, []);

	if (authLoading && getToken()) {
		return <div className='content'>Checking Authentication...</div>;
	}

	return (
		<div className='App'>
			<BrowserRouter>
				<div>
					<div className='header'>
						<NavLink exact activeClassName='active' to='/'>
							Home
						</NavLink>
						<NavLink activeClassName='active' to='/login'>
							Login
						</NavLink>
						<small>(Access without token only)</small>
						<NavLink activeClassName='active' to='/dashboard'>
							Dashboard
						</NavLink>
						<small>(Access with token only)</small>
					</div>
					<div className='content'>
						<Switch>
							<Route exact path='/' component={Home} />
							<PublicRoute path='/login' component={Login} />
							<PublicRoute path='registration' component={RegisterUser} />
							<PrivateRoute path='/dashboard' component={Dashboard} />
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
