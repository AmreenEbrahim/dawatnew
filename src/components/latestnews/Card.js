import React from "react";

const Card = ({ src, title }) => {
	return (
		<div className="e-card">
			<div className="card-image">
				<img src={src} alt="No " />
			</div>
			<div className="e-card-content">
				<h4>{title}</h4>
				<p>
					JavaScript Succinctly was written to give readers an accurate, concise
					examination of JavaScript objects and their supporting nuances, such
					as complex values, primitive values, scope, inheritance, the head
					object, and more.
				</p>
				<p>24february 2017 - 5comments</p>
			</div>
		</div>
	);
};

export default Card;
