import React from "react";

const HeaderList = () => {
	return (
		<div className="header">
			<header>
				<div className="container">
					<ul className="primary">
						<li>
							<a href="/">Email:info@restaurant.com</a>
						</li>
						<li>
							<a href="/">Telephone: +18002345677</a>
						</li>
					</ul>
					<ul className="secondary">
						<img src={"../../img/fbwhite.png"} alt="No" />
						<img src={"../../img/google-plus.png"} alt="No" />
						<img src={"../../img/twitter.png"} alt="No" />
						<img src={"../../img/skype.png"} alt="No" />
						<img src={"../../img/globe.png"} alt="No" />
						<img src={"../../img/pinterest.png"} alt="No" />
						{/* <li>
							<a href="/" class="book-now">
								Book Now
							</a>
						</li> */}
					</ul>
				</div>
			</header>
			<div className="bottom_border"></div>
		</div>
	);
};

export default HeaderList;
