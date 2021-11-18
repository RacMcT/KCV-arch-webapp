import React from "react";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import RegistrationForm from "../components/Registration";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import Notes from "../components/Notes";

function Home() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Notes />
				<Login />
				<Dashboard />
				{/* <PhotoCarousel /> */}
				<RegistrationForm />
				<h1>
					{" "}
					Welcome to Rachel's Capstone Home Page!- testing if it's all working?!
				</h1>
			</div>
		</body>
	);
}

export default Home;
