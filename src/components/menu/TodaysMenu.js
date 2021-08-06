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
					<MenuCard />
					<MenuCard />
				</div>
				<div label="Breakfast">
					<MenuCard />
					<MenuCard />
				</div>
				<div label="Lunch">
					<MenuCard />
					<MenuCard />
				</div>
				<div label="Dinner">
					<MenuCard />
					<MenuCard />
				</div>
				<div label="coffee">
					<MenuCard />
					<MenuCard />
				</div>
				<div label="Snack">
					<MenuCard />
					<MenuCard />
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
