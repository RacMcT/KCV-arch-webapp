import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/landingPage/landingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/registerPage/registrationPage";
import ProfileScreen from "./screens/profile/profile";
import Dashboard from "./components/dashboard";

export default function App() {
	return (
		<Router>
			<Header />
			<main className='App'>
				<Route path='/' component={LandingPage} exact />
				<Route path='/login' component={LoginScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/profile' component={ProfileScreen} />
				<Route path='/dashboard' component={Dashboard} />
			</main>
			<Footer />
		</Router>
	);
}
