import React from "react";
import { Image } from "semantic-ui-react";

const Navbar = () => {
	return (
		<div class="navbar">
			<div class="container">
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
							<a href="#">About us</a>
						</li>
						<li>
							<a href="#">Offer</a>
						</li>
						<li>
							<a href="#">Menu</a>
						</li>
						<li>
							<a href="#">Team</a>
						</li>
						<li>
							<a href="#">blog</a>
						</li>
						<li>
							<a href="#">gallery</a>
						</li>
						<li>
							<a href="#">contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
