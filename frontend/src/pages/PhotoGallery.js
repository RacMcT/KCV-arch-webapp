// photo carousels that show artifact images, excavation photos, etc.
// carousels by broad topics- put on lightboxes if there's time?

// Topics: excavations, lithics, ceramics, fauna, flora, maps...

import React from "react";
import Footer from "../components/Footer";
import PhotoCarousel from "../components/PhotoCarousel";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function PhotoGallery() {
	return (
		<body class='d-flex flex-column min-vh-100'>
			<div class='wrapper flex-grow-1'>
				<Navbar />
				<h1>Photo Gallery</h1>
				<h2>Featured Artifacts </h2>
				<PhotoCarousel />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>

				<h2>Technology at KCV </h2>
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

export default PhotoGallery;
