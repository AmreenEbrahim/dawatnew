import React from "react";

import Tabs from "./Tabs";
import MenuCard from "./MenuCard";

const TodaysMenu = () => {
	return (
		<section className="menu-section">
			<h3>Today's Menu</h3>
			<img src="/img/red.png" alt="No " />

			<Tabs>
				<div label="All">
					<MenuCard src="../../img/menu_1.jpg" name="Cup Cake" price="350rs" />
					<MenuCard src="../../img/menu_2.jpg" name="Cup Cake" price="150rs" />
					<MenuCard src="../../img/menu_3.jpg" name="Cup Cake" price="100rs" />
					<MenuCard src="../../img/menu_4.jpg" name="Cup Cake" price="400rs" />
				</div>
				<div label="Breakfast">
					<MenuCard src="../../img/menu_5.jpg" name="Cup Cake" price="350rs" />
					<MenuCard src="../../img/menu_6.jpg" name="Cup Cake" price="50rs" />
				</div>
				<div label="Lunch">
					<MenuCard src="../../img/menu_1.jpg" name="Cup Cake" price="550rs" />
					<MenuCard src="../../img/menu_3.jpg" name="Cup Cake" price="350rs" />
				</div>
				<div label="Dinner">
					<MenuCard src="../../img/menu_2.jpg" name="Cup Cake" price="150rs" />
					<MenuCard src="../../img/menu_5.jpg" name="Cup Cake" price="300rs" />
				</div>
				<div label="Coffee">
					<MenuCard src="../../img/menu_1.jpg" name="Cup Cake" price="50rs" />
					<MenuCard src="../../img/menu_6.jpg" name="Cup Cake" price="150rs" />
				</div>
				<div label="Snack">
					<MenuCard src="../../img/menu_1.jpg" name="Cup Cake" price="250rs" />
					<MenuCard src="../../img/menu_4.jpg" name="Cup Cake" price="150rs" />
				</div>
			</Tabs>

			{/* <Tabs>
				<TabList cclassname="tablist">
					<Tab className="tab">
						<a href="/" class="tab1">
							Book Now
						</a>
					</Tab>
					<Tab>
						<a href="/" class="tab1">
							Book Now2
						</a>
					</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs> */}
		</section>
	);
};

export default TodaysMenu;
