import {Button, Link, Panel} from "@root";
import {NextPageProps} from "nextjs-tools";
import React from "react";
import FlatRegularMenuBurger from "web-asset/svg/regular/fi-rr-menu-burger.svg";

const colors = [
	"primary",
	"secondary",
	"success",
	"info",
	"warning",
	"danger",
	"light",
	"dark",
	"pink",
	"purple",
	"blue",
];

export default function ({}: NextPageProps) {
	return (
		<Panel>
			<h3 className="mb-5">Button</h3>
			<h4 className="mb-5">filled square</h4>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4 mb-10">
				{colors.map((color, key) => (
					<Button
						iconSrc={FlatRegularMenuBurger}
						key={key}
						buttonColor={color as any}
						buttonStyle={"filled"}>
						{color}
					</Button>
				))}
			</div>

			<h4 className="mb-5">filled round</h4>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4 mb-10">
				{colors.map((color, key) => (
					<Button
						iconSrc={FlatRegularMenuBurger}
						key={key}
						buttonColor={color as any}
						buttonStyle={"filled"}
						buttonCorner={"round"}>
						{color}
					</Button>
				))}
			</div>

			<h4 className="mb-5">outlined</h4>
			<div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:gap-4 mb-10">
				{colors.map((color, key) => (
					<Button
						iconSrc={FlatRegularMenuBurger}
						key={key}
						buttonColor={color as any}
						buttonStyle={"outlined"}>
						{color}
					</Button>
				))}
			</div>

			<h4 className="mb-5">size</h4>
			<Button
				className="mr-2"
				buttonColor="primary"
				buttonSize="sm">
				sm
			</Button>
			<Button
				className="mr-2"
				iconSrc={FlatRegularMenuBurger}
				buttonColor="primary"
				buttonSize="sm">
				sm
			</Button>
			<Button
				className="mr-2"
				iconSrc={FlatRegularMenuBurger}
				buttonColor="primary"
				buttonSize="md">
				md
			</Button>
			<Button
				className="mr-2"
				iconSrc={FlatRegularMenuBurger}
				buttonColor="primary"
				buttonSize="lg">
				lg
			</Button>

			<h4 className="mb-5 mt-5">disabled</h4>
			<Button
				className="mr-2"
				buttonColor="primary"
				buttonSize="sm">
				enabled
			</Button>
			<Button
				disabled
				className="mr-2"
				iconSrc={FlatRegularMenuBurger}
				buttonColor="primary"
				buttonSize="sm">
				disabled
			</Button>
			<Button
				className="mr-2"
				buttonColor="primary"
				buttonSize="sm"
				buttonStyle="outlined">
				enabled
			</Button>
			<Button
				disabled
				className="mr-2"
				iconSrc={FlatRegularMenuBurger}
				buttonColor="primary"
				buttonSize="sm"
				buttonStyle="outlined">
				disabled
			</Button>

			<h4 className="mb-5 mt-5">Link</h4>
			<Link
				href="/button"
				className="mr-2"
				buttonColor="primary"
				buttonSize="sm">
				/button
			</Link>
			<Link
				href="/table"
				className="mr-2"
				iconSrc={FlatRegularMenuBurger}
				buttonColor="primary"
				buttonSize="sm">
				/table
			</Link>
		</Panel>
	);
}
