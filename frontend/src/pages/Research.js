// ongoing research at the KCV site- excavations, dissertations, articles, presentations, etc.
// topics of research- technology, prehistoric ecology, northern midcontinent agriculture vs wildrice cultivation

import React from "react";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import Video from "../components/VideoIFrame";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Research() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Navbar />
				<h1>Ongoing Research at KCV</h1>
				<h2>Field Work</h2>
				<PhotoCarousel />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<h2>Laboratory Analysis Work</h2>
				<PhotoCarousel />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<h2>Tracing Dog Domestication for Oneota Groups: Area Case Study</h2>
				<PhotoCarousel />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<Footer />
			</div>
		</body>
	);
}

export default Research;
