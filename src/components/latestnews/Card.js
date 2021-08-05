import React from "react";

const Card = ({src}) => {
	return (
		<div className="e-card">
			<div className="card-image">
				<img src={src} />
			</div>
			<div className="e-card-content">
				<h4>Restaurant welcome day meetup</h4>
				<p>
					JavaScript Succinctly was written to give readers an accurate, concise
					examination of JavaScript objects and their supporting nuances, such
					as complex values, primitive values, scope, inheritance, the head
					object, and more.
				</p>
				<span>24february 2017     -    5comments</span>
			</div>
		</div>
	);
};

export default Card;
