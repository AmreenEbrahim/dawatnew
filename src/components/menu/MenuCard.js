import React from "react";
// import { Grid } from "semantic-ui-react";

const MenuCard = () => {
	return (
		<div className="menucard-section">
			<ul>
				<li>
					<img alt="No" src="../../img/menu_1.jpg" />
					<div>
						<h4>Lorem ipsum dolor sit amet,</h4>
						<ul>
							<li className="m0p0">ingredients</li>
							{/* <li className="m0p0">123</li>
							<li className="m0p0">123</li> */}
						</ul>
					</div>

					<h4>350rs</h4>
				</li>
			</ul>
		</div>
	);
};

export default MenuCard;
