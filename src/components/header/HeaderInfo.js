import React from "react";

import { Header, Image } from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeaderList from "./HeaderList";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PromoCard from "../promo/PromoCard";
import BannerCard from "./BannerCard";
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
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		partialVisibilityGutter: 180
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		partialVisibilityGutter: 100
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		partialVisibilityGutter: 50
	}
};
const images = [
	{
		name: "Mark Angelila",
		src: "../../img/promo_slide_1.jpg",
		desc: "Lorem Ipsum is simply dummy text11 "
	},
	{
		name: "Angel Meskat",
		src: "../../img/promo_slide_1.jpg",
		desc: "Lorem Ipsum is simply dummy text."
	}
	// {
	// 	name: "John Doe",
	// 	src: ".../../img/promo_slide_1.jpg",
	// 	desc: "Lorem Ipsum is simply dummy text "
	// }
];
const HeaderInfo = () => {
	return (
		<div className="header-section">
			{/* <BannerCard /> */}
			{/* <BannerCard /> */}

			{/* {images.map(image => (
				<div>
					<figure className="img__wrap">
						{/* <div className="layer">
							<h4 className="chefs-link">hii</h4>
						</div> */}

			{/* <Slider {...settings} className="promo-card slick-list">
				<img src={"../../img/promo_slide_1.jpg"} size="medium" />
				<img src={"../../img/promo_slide_1.jpg"} size="medium" />
				<img src={"../../img/promo_slide_1.jpg"} size="medium" />
			</Slider>
			<div className="layer ">
				<HeaderList />
				{/* <h3>HIII </h3> */}
			{/* <Navbar />
			</div>  */}
		</div>
	);
};

export default HeaderInfo;
