import React, { Fragment } from "react";

// import "semantic-ui-css/semantic.min.css";
import "../src/css/main.scss";
// import { Container } from "semantic-ui-react";

import HeaderInfo from "./components/header/HeaderInfo";
import OurStory from "./components/ourstory/OurStory";
import BookTable from "./components/bookTable/BookTable";
import Footer from "./components/footer/Footer";
import Galleryy from "./components/gallery/Galleryy";
import Chefs from "./components/chefs/Chefs";
import LatestNews from "./components/latestnews/LatestNews";
import Sliderslick from "./components/promo/Sliderslick";
import TodaysMenu from "./components/menu/TodaysMenu";

import ScrollToTop from "react-scroll-to-top";

function App() {
	return (
		// <ScrollingProvider>
		<Fragment>
			<ScrollToTop smooth color="#fff" style={{ "background-color": " red" }} />

			<HeaderInfo />
			<OurStory />
			<Sliderslick />
			<TodaysMenu />
			<BookTable />
			<Chefs />
			<LatestNews />
			<Galleryy />
			<Footer />
		</Fragment>
		// </ScrollingProvider>
	);
}

export default App;
