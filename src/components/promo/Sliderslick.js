import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PromoCard from "./PromoCard";

const Sliderslick = () => {
	let settings = {
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
	return (
		<section className="promo-section">
			<h3>Special Offers</h3>
			<Slider {...settings} className="promo-card slick-list">
				<PromoCard
					src={"../../img/promo_slide_1.jpg"}
					offer={" 40% off for 9inch- 12inch pizza-Wed,Thu,Fridayonly"}
					items={
						"Pizza 12 inch +1 Side Dish +1.5L Coke Bottle only From 209,00"
					}
				/>
				<PromoCard
					src={"../../img/promo_slide_2.jpg"}
					offer={" 40% off for 9inch- 12inch pizza-Wed,Thu,Fridayonly"}
					items={
						"Pizza 12 inch +1 Side Dish +1.5L Coke Bottle only From 209,00"
					}
				/>
				<PromoCard
					src={"../../img/promo_slide_3.jpg"}
					offer={" 40% off for 9inch- 12inch pizza-Wed,Thu,Fridayonly"}
					items={
						"Pizza 12 inch +1 Side Dish +1.5L Coke Bottle only From 209,00"
					}
				/>
			</Slider>
		</section>
	);
};

export default Sliderslick;
