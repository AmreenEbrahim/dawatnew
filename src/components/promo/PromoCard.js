import React from "react";

const PromoCard = ({ src, offer, items }) => {
	// console.log("props",src,offer,items)
	return (
		<a>
			<img src={src} size="medium" />
			<div className="promo-card-content">
				<h4>{offer}</h4>
				<p>{items}</p>
				<a href="#" class="order-now">
					Order Now
				</a>
			</div>
		</a>
	);
};

export default PromoCard;
