import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { render } from "react-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import LandingPage from "./screens/landingPage/landingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/registerPage/registrationPage";
import ProfileScreen from "./screens/profile/profile";
import Dashboard from "./screens/dashboardPage/dashboard";

export default function App() {
	return (
		<main className='App'>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path='/' component={LandingPage} exact />
					<Route path='/login' component={LoginScreen} />
					<Route path='/register' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/dashboard' component={Dashboard} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</main>
	);
}
