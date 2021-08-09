import React from "react";

// import { Container, Image } from "semantic-ui-react";

const OurStory = () => {
	return (
		<section className="title" id="story">
			<h1>Our Story</h1>
			<p className="story">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining
				essentially unchanged. It was popularised in the 1960s with the release
				of Letraset sheets containing Lorem Ipsum passages, and more recently
				with desktop publishing software like Aldus PageMaker including versions
				of Lorem Ipsum.
			</p>
			<img size="mini" src="/img/about_sign.png" alt="No " />
			<img size="lat" className="story-border" src="/img/story.png" alt="No " />
		</section>
	);
};

export default OurStory;
