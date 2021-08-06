import React from "react";

const HeaderList = () => {
	return (
		<div className="header">
			<header>
				<div className="container">
					<ul className="primary">
						<li>
							<a href="/">email</a>
						</li>
						<li>
							<a href="/">telephone</a>
						</li>
					</ul>
					<ul className="secondary">
						<li>sociaal link</li>
						<li>
							<a href="/">book now</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
					</ul>
				</div>
			</header>
			<div className="bottom_border"></div>
		</div>
	);
};

export default HeaderList;
