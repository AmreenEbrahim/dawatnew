// import logo from "./logo.svg";
// import './App.css';
import "../src/css/main.scss";
import { Container } from "semantic-ui-react";

// import Sliderslick from "./components/header/Sliderslick";
import HeaderInfo from "./components/header/HeaderInfo";
import OurStory from "./components/ourstory/OurStory";
import BookTable from "./components/bookTable/BookTable";
import Footer from "./components/footer/Footer";
import Galleryy from "./components/gallery/Galleryy";
import Chefs from "./components/chefs/Chefs";
import LatestNews from "./components/latestnews/LatestNews";
import Sliderslick from "./components/promo/Sliderslick";
import TodaysMenu from "./components/menu/TodaysMenu";
function App() {
	return (
		<Container>
			<HeaderInfo />
			<OurStory />
			<Sliderslick />
			<TodaysMenu />
			<BookTable />
			<Chefs />
			<LatestNews />
			<Galleryy />
			<Footer />
		</Container>
	);
}

export default App;
