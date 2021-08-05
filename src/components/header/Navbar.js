import React from "react";
import { Image } from "semantic-ui-react";

const Navbar = () => {
	return (
		<div class="navbar">
			<div class="container">
				<a href="#">
					<Image src={"../../img/main_logo.png"} />
				</a>

				<nav>
					<ul class="primary-nav">
						<a href="#">
							<Image src={"../../img/main_logo_black.png"} />
						</a>
					</ul>
					<ul class="secondary-nav">
						<li class="current">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Feature</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
						<li class="go-premiem-cta">
							<a href="#">Go Premiem</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
