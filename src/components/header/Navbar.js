import React from "react";
import { Image } from "semantic-ui-react";

const Navbar = () => {
	return (
		<div class="navbar">
			<div class="container">
				<nav>
					<ul class="primary-nav">
						<a href="/">
							<Image src={"../../img/main_logo_black.png"} />
						</a>
					</ul>
					<ul class="secondary-nav">
						<li class="current">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About us</a>
						</li>
						<li>
							<a href="/offer">Offer</a>
						</li>
						<li>
							<a href="/menu">Menu</a>
						</li>
						<li>
							<a href="/team">Team</a>
						</li>
						<li>
							<a href="/blog">blog</a>
						</li>
						<li>
							<a href="/gallery">gallery</a>
						</li>
						<li>
							<a href="/contact">contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
