import React from "react";
import Navbar from "./Navbar";

const BannerNew = () => {
	return (
		<div className="banner">
			<div className="slider">
				<img src="./../img/promo_slide_1.jpg" id="slideImg" />
			</div>
			<div className="overlay" id="slideset1">
				<Navbar />
				<span class="bannerdescription">
					<h3>Our menu</h3>
					<span>see whats new today</span>
				</span>
				{/* <div className="content">Lorem Ipsum is simply dummy text11</div> */}
			</div>
		</div>
	);
};

export default BannerNew;
