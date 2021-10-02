import React from "react";
import Carousel from "react-bootstrap/Carousel";

//https://react-bootstrap.github.io/components/carousel/#api

<Carousel>
	<Carousel.Item>
		<img
			className='photo-carousel-item'
			src='../images/practice/peru'
			alt='First slide'
		/>
		<Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className='photo-carousel-item'
			src='../images/practice/peru'
			alt='Second slide'
		/>

		<Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</Carousel.Caption>
	</Carousel.Item>
	<Carousel.Item>
		<img
			className='photo-carousel-item'
			src='../images./practice/israel.jpg'
			alt='Third slide'
		/>

		<Carousel.Caption>
			<h3>Third slide label</h3>
			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
		</Carousel.Caption>
	</Carousel.Item>
</Carousel>;

export default Carousel;
