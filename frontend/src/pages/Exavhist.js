// maps and backstory from Scout & Scalvum 1800s all the way to last field school back in 2016/2017?
// maps, text, cards?, photo carousel?- maps through time??

//add video iframe component!

import React from "react";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import Video from "../components/VideoIFrame";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function ExcavHist() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Navbar />
				<h1>Koshkonong Creek Village Excavation History</h1>
				<h2>Field Schools at UW-Milwaukee </h2>
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
				<Video />

				<Footer />
			</div>
		</body>
	);
}

export default ExcavHist;
