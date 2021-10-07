import React from "react";

//can customize size- height and width

function LandscapesVideo() {
	return (
		<iframe
			width='560'
			height='315'
			src='https://www.youtube.com/embed/yPC5nObHjLM'
			title='YouTube video player'
			frameborder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowfullscreen
		></iframe>
	);
}
export default LandscapesVideo;
