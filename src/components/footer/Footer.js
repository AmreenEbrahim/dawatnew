import React from "react";
import { Image } from "semantic-ui-react";

const Footer = () => {
	return (
		<div className="footer">
			<img src={"../../img/main_logo.png"} alt="No " />
			<address>
				20,floor, Queensland Victoria Building,60 California USA
			</address>
			<p>hello@dawat.com</p>
			<p>
				<a href="tel:+8800000001111">+88 000 0000 1111</a>
			</p>
			<div className="social-links">
				<Image src={"../../img/fbwhite.png"} />
				<Image src={"../../img/google-plus.png"} />
				<Image src={"../../img/twitter.png"} />
				<Image src={"../../img/skype.png"} />
				<Image src={"../../img/globe.png"} />
				<Image src={"../../img/pinterest.png"} />
			</div>
			<div className="bottom_border"></div>
			<footer className="footer-list ">
				<div className="container">
					<ul className="primary">
						<li>
							<a href="/">Teams of use</a>
						</li>
						<li>
							<a href="/">Privacy Policy</a>
						</li>
						<li>
							<a href="/">SiteMap</a>
						</li>
						<li>
							<a href="/"> Contact</a>
						</li>
					</ul>
					<ul className="secondary">
						<li>
							Copyright @2017<a href="/">Dawat Restaurant</a> All rights
							reserved
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
