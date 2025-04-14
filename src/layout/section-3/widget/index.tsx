"use client";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {FlatRegularMenuBurger} from "../../../asset/regular/flat-regular-menu-burger";
import Accordion, {Props as AccordionProps} from "./accordion";
import Aside from "./aside";

export interface Props extends AccordionProps {
	top?: ReactNode;
}

export default function ({header, asideMenus, top}: Readonly<Props>) {
	const [open, setOpen] = useState(false);

	return (
		<>
			<header
				className={fnCss.sum(`
					flex items-center top-0 z-10
					sticky lg:left-(--width-aside) lg:w-(--width-main) w-full left-0 h-(--height-header) px-2 
					bg-(--color-background-nav) border-bottom
					transition-all duration-300
				`)}>
				<button
					className={fnCss.sum(`mx-2 block lg:hidden p-2 rounded-sm border-all`)}
					onClick={() => setOpen(!open)}>
					<Image
						className="filter-(--light-filter)"
						src={FlatRegularMenuBurger}
						width={25}
						height={25}
						alt="menu"
					/>
				</button>
				<div className="flex-1" />
				<div className="text-(--light)">{top}</div>
			</header>
			<Aside
				open={open}
				onClose={() => setOpen(false)}>
				<Accordion {...{header, asideMenus}} />
			</Aside>
		</>
	);
}
