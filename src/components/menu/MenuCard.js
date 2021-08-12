import React from "react";
// import { Grid } from "semantic-ui-react";

const MenuCard = ({ name, price, src }) => {
	return (
		<div className="menucard-section">
			<ul>
				<li>
					<img alt="No" src={src} />
					<div>
						<h4>{name}</h4>
						<ul className="items-ul">
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>
							<li className="m0p0">Juice</li>

							{/* <li className="m0p0">123</li>
							<li className="m0p0">123</li> */}
						</ul>
					</div>

					<h5>{price}</h5>
				</li>
			</ul>
			<hr className="solid" />
		</div>
	);
};

export default MenuCard;
