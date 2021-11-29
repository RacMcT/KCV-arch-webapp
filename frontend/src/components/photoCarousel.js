import React from "react";
import Carousel from "react-bootstrap/Carousel";

//https://react-bootstrap.github.io/components/carousel/#api
const PhotoCarousel = () => (
	<Carousel>
		<Carousel.Item>
			<img
				className='photo-carousel-item'
				src='assets/bone-awl.png'
				alt='First slide'
				// width='260px;'
			/>
			<Carousel.Caption>
				<h3>Bone Awl</h3>
				<p>
					Awls, used as leather punches in sewing hides, were made from a
					variety of bones. The ulnae of deer could be cut, and then ground and
					polished to form a sharp tip. Splinters of rib and long bone were also
					ground into awls.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className='photo-carousel-item'
				src='assets/copper-pendant.png'
				alt='Second slide'
				// width='260px;'
			/>
			<Carousel.Caption>
				<h3>Copper Pendant</h3>
				<p>
					The scarcity of copper at KCV and the ideological power of this raw
					material suggests that these personal adornments had the potential to
					be used by individuals to display and reiterate their power within the
					community during an era of intensifying social stratification.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				className='photo-carousel-item'
				src='assets/images/canines-clean-img.png'
				alt='Third slide'
				// width='260px;'
			/>
			<Carousel.Caption>
				<h3>Lynx or Bobcat Canine Pendant</h3>
				<p>
					The only cases of adornment include canines from carnivores, most
					likely bobcat or lynx , and three bird bone beads. In the case of the
					pendants, there is the same potential type of fastening to either be
					worn as a pendant or fastened to clothing. One canine shows evidence
					of working but the stringing area was removed. One shows evidence of
					being a finished pendant.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
);

export default PhotoCarousel;
