import React from "react";
// import { Grid, Image, Container } from "semantic-ui-react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

// const images = [
// 	{
// 		name: "Mark Angelila",
// 		src: "../../img/team-1.jpg",
// 		desc: "Lorem Ipsum is simply dummy text "
// 	},
// 	{
// 		name: "Angel Meskat",
// 		src: "../../img/team-2.jpg",
// 		desc: "Lorem Ipsum is simply dummy text."
// 	},
// 	{
// 		name: "John Doe",
// 		src: ".../../img/team-3.jpg",
// 		desc: "Lorem Ipsum is simply dummy text "
// 	},
// 	{
// 		name: "Angel Di Maria",
// 		src: "../../img/team-4.jpg",
// 		desc: "Lorem Ipsum is simply dummy text "
// 	},
// 	{
// 		name: "Park Ji Sung",
// 		src: "../../img/team-5.jpg",
// 		desc: "Lorem Ipsum is simply dummy text "
// 	}
// ];

const LatestNews = props => {
	return (
		<section className="latest-news" id="blog">
			<div className="title">
				<h3>Latest News</h3>
				<img src="/img/red.png" alt="No " />
			</div>
			<div className="carasouel-width ">
				<Carousel
					swipeable={true}
					showDots={false}
					arrows={true}
					responsive={responsive}
					// means to render carousel on server-side.
					infinite={true}
					autoPlay={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					removeArrowOnDeviceType={["tablet", "mobile"]}
					deviceType={props.deviceType}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-5-px"
				>
					<Card
						src={"./../img/blog-1.jpg"}
						title={"Restaurant welcome day meetup"}
					/>
					<Card
						src={"./../img/blog-2.jpg"}
						title={"Restaurant welcome day meetup1"}
					/>
					<Card
						src={"./../img/blog-3.jpg"}
						title={"Restaurant welcome day meetup2"}
					/>
					<Card
						src={"./../img/menu_1.jpg"}
						title={"Restaurant welcome day meetup3"}
					/>
					<Card
						src={"./../img/menu_2.jpg"}
						title={"Restaurant welcome day meetup4"}
					/>
					<Card
						src={"./../img/menu_3.jpg"}
						title={"Restaurant welcome day meetup5"}
					/>
				</Carousel>
			</div>
		</section>
	);
};

export default LatestNews;
