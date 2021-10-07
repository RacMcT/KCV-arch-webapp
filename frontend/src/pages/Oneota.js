// If time, create a basic about Onetoa prehistory in the area/lake koshkonong locality page
// nav bar, photos, maps, text

import React from "react";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import Navbar from "../components/Navbar";
import LandscapesVideo from "../components/LandscapesVideo";

function Oneota() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Navbar />
				<h1>About Oneota</h1>
				<h2>The Basics </h2>
				<LandscapesVideo />
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

export default Oneota;
