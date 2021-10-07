import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//can customize size- height and width

function Video() {
	return (
		<iframe
			width='560'
			height='315'
			src='https://www.youtube.com/embed/GJM93DPPOT0'
			title='YouTube video player'
			frameborder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowfullscreen
		></iframe>
	);
}
export default Video;
