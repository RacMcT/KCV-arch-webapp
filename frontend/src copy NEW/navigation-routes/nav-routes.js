import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

//Public Routes
const Home = () => <h1>Home (Public)</h1>;
const About = () => <h1>About (Public)</h1>;
//Private Routes
const Dashboard = () => <h1>Dashboard (Private)</h1>;
const Settings = () => <h1>Settings (Private)</h1>;

const Login = () => <h1>Login to Access Dashboard Features for Case Study</h1>;

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
}

function RequireAuth({ children }) {
	const { authed } = useAuth();
	const location = useLocation();

	return authed === true ? (
		children
	) : (
		<Navigate to='/login' replace state={{ path: location.pathname }} />
	);
}

export default function App() {
	return (
		<div>
			<Nav />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='//about' element={<About />} />
				<Route
					path='/dashboard'
					element={
						<RequireAuth>
							<Dashboard />
						</RequireAuth>
					}
				/>
				<Route
					path='/settings'
					element={
						<RequireAuth>
							<Settings />
						</RequireAuth>
					}
				/>
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}
