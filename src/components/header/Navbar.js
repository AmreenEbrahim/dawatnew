import React, { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import logo from "../../img/main_logo.png";
import logoBlue from "../../img/main_logo_black.png";
const Navbar = () => {
	//navbar scroll when active state
	const [navbar, setNavbar] = useState(false);
	// const [active, setActive] = useState(false);

	//logo scroll when active
	const [navbarLogo, setNavbarLogo] = useState(logo);

	//navbar scroll changeBackground function
	const changeBackground = () => {
		// console.log(window.scrollY);
		if (window.scrollY >= 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	// const toggleClass = () => {
	// 	setActive(true);
	// 	// this.setState({addClass: !this.state.addClass});
	// };
	useEffect(() => {
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});

	//logo scroll function//1308
	const changeLogo = () => {
		if (window.scrollY >= 80) {
			setNavbarLogo(logoBlue);
		} else {
			setNavbarLogo(logo);
		}
	};

	useEffect(() => {
		changeLogo();
		// adding the event when scroll change Logo
		window.addEventListener("scroll", changeLogo);
	});
	// const showAlert = () => {
	// 	alert("I'm an alert");
	// };
	// onClick={() => showAlert()}
	return (
		<div className={navbar ? "navbar active" : "navbar"}>
			<div className="container">
				<nav>
					<ul className="primary-nav">
						<a href="/">
							<Image src={navbarLogo} alt="logo" />
						</a>
					</ul>
					<ul className="secondary-nav">
						<li
							className="current"
							// className={active ? "current" : null}
							// onClick={() => toggleClass()
							// }
						>
							<a href="#home">Home</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#about">About us</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#offer">Offer</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#menu">Menu</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#team">Team</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#blog">blog</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#gallery">gallery</a>
						</li>
						<li
						// className={active ? "current" : null}
						// onClick={() => toggleClass()}
						>
							<a href="#contact">contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
