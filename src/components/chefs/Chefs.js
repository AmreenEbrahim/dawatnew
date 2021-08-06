import React from "react";
import { Image } from "semantic-ui-react";

const images = [
	{
		name: "Mark Angelila",
		src: "../../img/team-1.jpg",
		desc: "Lorem Ipsum is simply dummy text "
	},
	{
		name: "Angel Meskat",
		src: "../../img/team-2.jpg",
		desc: "Lorem Ipsum is simply dummy text."
	},
	{
		name: "John Doe",
		src: ".../../img/team-3.jpg",
		desc: "Lorem Ipsum is simply dummy text "
	},
	{
		name: "Angel Di Maria",
		src: "../../img/team-4.jpg",
		desc: "Lorem Ipsum is simply dummy text "
	},
	{
		name: "Park Ji Sung",
		src: "../../img/team-5.jpg",
		desc: "Lorem Ipsum is simply dummy text "
	}
];
const Chefs = () => {
	return (
		<section className="chef-section ">
			<h3>Our chef's</h3>
			<img className="redimg" src="../../img/red.png" />
			<div>
				{images.map(image => (
					<div>
						<figure className="img__wrap">
							<img src={image.src} size="mini" />
							<p className="img__description">
								<ul className="chef-social">
									<li>
										<Image src={"../../img/fbwhite.png"} />
									</li>
									<li>
										<Image src={"../../img/google-plus.png"} />
									</li>
									<li>
										<Image src={"../../img/twitter.png"} />
									</li>
									<li>
										<Image src={"../../img/skype.png"} />
									</li>
								</ul>
							</p>
							<figcaption className="name">{image.name}</figcaption>
							<figcaption className="desc">{image.desc}</figcaption>
						</figure>
					</div>
				))}
			</div>
		</section>
	);
};

export default Chefs;
/* {images.map(image => (
					// <Link to={image.href}>
					<Image src={image.src} size="medium" />
					// </Link>
				))} */
