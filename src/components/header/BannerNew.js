import React from "react";
// import Navbar from "./Navbar";

const BannerNew = ({ src, menu, submenu }) => {
	return (
		<section className="banner " id="banner">
			<div className="slider">
				<img src={src} alt="No" id="slideImg" />
			</div>
			<div className="overlay" id="slideset1">
				<span class="bannerdescription">
					<h3>{menu}</h3>
					<p> {submenu}</p>
					<a href="/" class="book-now-header">
						Book Now
					</a>
				</span>
				{/* <div className="content">Lorem Ipsum is simply dummy text11</div> */}
			</div>
		</section>
	);
};

export default BannerNew;
