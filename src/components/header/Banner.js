import React from "react";
// import { Image } from "semantic-ui-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
	arrows: false,
	infinite: true,
	speed: 500,
	dots: true,
	adaptiveHeight: true,
	slidesToShow: 1,
	centerMode: true,
	autoplay: true,
	slidesToScroll: 1
};
const Banner = () => {
	return (
		<section className="banner-section" id="slideset1">
			<Slider {...settings}>
				<div>
					<div className="banner1">
						{/* <img src="./../img/promo_slide_1.jpg" size="mini" /> */}
						<span class="bannerdescription">
							Lorem Ipsum is simply dummy text11
						</span>
					</div>
				</div>
			</Slider>
		</section>
	);
};

export default Banner;
