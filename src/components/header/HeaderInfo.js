import React from "react";

// import { Header, Image } from "semantic-ui-react";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeaderList from "./HeaderList";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import PromoCard from "../promo/PromoCard";
// import Banner from "./Banner";
import BannerNew from "./BannerNew";
const settings = {
	arrows: false,
	infinite: true,
	speed: 100,
	dots: true,
	adaptiveHeight: true,
	slidesToShow: 1,
	centerMode: true,
	autoplay: false,
	slidesToScroll: 1
};

const HeaderInfo = () => {
	return (
		<div className="header-section">
			<Navbar />
			<HeaderList />

			<Slider {...settings} className=" slick-list">
				<BannerNew
					src="./../img/promo_slide_1.jpg"
					menu="Welcome to "
					submenu="Dawat Cafe "
				/>
				<BannerNew
					src="./../img/promo_slide_2.jpg"
					menu="Get Ready"
					submenu="To join with us"
				/>
				<BannerNew
					src="./../img/promo_slide_3.jpg"
					menu="our menu"
					submenu="See whats new today"
				/>
			</Slider>
			{/* <div className="layer ">
				<h3>HIII </h3>
				<Navbar />
			</div> */}
		</div>
	);
};

export default HeaderInfo;
