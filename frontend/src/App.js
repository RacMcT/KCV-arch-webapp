import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
					<Route path='/' element={<LandingPage />} />
					<Route path='/login' element={<LoginScreen />} />
					<Route path='/register' element={<RegisterScreen />} />
					<Route path='/profile' element={<ProfileScreen />} />
					<Route path='/dashboard' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</main>
	);
}
