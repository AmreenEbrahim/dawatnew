import React, { useState, useEffect } from "react";

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
	arrows: true,
	infinite: true,
	speed: 100,
	dots: true,
	adaptiveHeight: true,
	slidesToShow: 1,
	centerMode: false,
	autoplay: true,
	slidesToScroll: 1
};

const HeaderInfo = () => {
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});
	return (
		<div className="header-section" id="home">
			{navbar ? (
				<div>
					<Navbar />
					<HeaderList />
				</div>
			) : (
				<div>
					<HeaderList />
					<Navbar />
				</div>
			)}
			{/* <Navbar />
			<HeaderList /> */}

			<Slider {...settings} className=" slick-list">
				<BannerNew
					src="./../img/promo_slide_1.jpg"
					menu="Welcome to "
					submenu="Dawat Cafe and Restaurant "
					activity="Reservation Now"
				/>
				<BannerNew
					src="./../img/promo_slide_3.jpg"
					menu="our menu"
					submenu="See whats new today"
					activity="Todays Menu"
				/>
				<BannerNew
					src="./../img/promo_slide_2.jpg"
					menu="Get Ready"
					submenu="To join with us"
					activity="Book Now"
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
