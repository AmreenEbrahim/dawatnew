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

import {
	ScrollingProvider,
	useScrollSections
	// Section
} from "react-scroll-section";

export const DynamicMenu = () => {
	const sections = useScrollSections();

	return (
		<ul>
			{sections.map(({ id, onClick, selected }) => (
				<li key={id} onClick={onClick} selected={selected}>
					{id.toUpperCase()}
				</li>
			))}
		</ul>
	);
};
function App() {
	return (
		<ScrollingProvider>
			<Fragment>
				<DynamicMenu />
				{/* <Section id="home">
					<HeaderInfo />
				</Section>
				<Section id="blog">
					<Galleryy />
				</Section> */}
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
		</ScrollingProvider>
	);
}

export default App;
