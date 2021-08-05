import React from "react";
import { Image } from "semantic-ui-react";

const Galleryy = () => {
	return (
		<section className="gallery-section">
			<h3>Galleryy</h3>
			<p class="img__description">
				<Image src={"../../img/fbwhite.png"} />
				<Image src={"../../img/google-plus.png"} />
				<Image src={"../../img/twitter.png"} />
				<Image src={"../../img/skype.png"} />
				<Image src={"../../img/globe.png"} />
				<Image src={"../../img/pinterest.png"} />
			</p>
			<img src="/img/about_sign.png" />
		</section>
	);
};

export default Galleryy;
