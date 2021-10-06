import React from "react";
import Iframe from "react-iframe";

function video() {
	return (
		<Iframe
			url='https://www.youtube.com/watch?v=GJM93DPPOT0'
			width='450px'
			height='450px'
			id='uwm-kcv-video'
			className='video-iframe'
			display='initial'
			position='relative'
		/>
	);
}
export default video;
