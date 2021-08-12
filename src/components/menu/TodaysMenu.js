import React from "react";

import Tabs from "./Tabs";
import MenuCard from "./MenuCard";

const TodaysMenu = () => {
	return (
		<section className="menu-section" id="menu">
			<h3>Today's Menu</h3>
			<img src="/img/red.png" alt="No " />

			<Tabs>
				<div label="All">
					<MenuCard
						src="../../img/menu_1.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_2.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_3.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_4.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_4.jpg"
						name="CupCake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_4.jpg"
						name="CupCake Recipes"
						price="$22"
					/>
				</div>
				<div label="Breakfast">
					<MenuCard
						src="../../img/menu_5.jpg"
						name="CupCake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_6.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_6.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_6.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
				</div>
				<div label="Lunch">
					<MenuCard
						src="../../img/menu_1.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_3.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
				</div>
				<div label="Dinner">
					<MenuCard
						src="../../img/menu_2.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_5.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
				</div>
				<div label="Coffee">
					<MenuCard
						src="../../img/menu_1.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_6.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
				</div>
				<div label="Snack">
					<MenuCard
						src="../../img/menu_1.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_4.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_4.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
					<MenuCard
						src="../../img/menu_4.jpg"
						name="Cup Cake Recipes"
						price="$22"
					/>
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
