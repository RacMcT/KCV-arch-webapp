// basic about archaeology page- pull from Rick and my Intro Arch week 1 lectures
// nav bar, cards with images, maps, photo carousel- maybe?

import React from "react";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import Navbar from "../components/Navbar";
import IntroArchVideo from "../components/Videos/IntroArchVideo";

function About() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Navbar />
				<h1>About Archaeology</h1>
				<IntroArchVideo />
				<h2>The Basics </h2>
				<PhotoCarousel />
				<h3>Fun Facts </h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<Footer />
			</div>
		</body>
	);
}

export default About;
