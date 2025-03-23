"use client";
import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	open: boolean;
	onClose: () => void;
	children?: ReactNode;
}

export default function ({children, open, onClose}: Readonly<Props>) {
	return (
		<>
			<aside
				className={fnCss.sum(
					`z-20
					w-(--width-aside) fixed lg:fixed top-0 left-0 h-full 
					overflow-hidden overscroll-y-auto 
					bg-(--color-background-nav) border-right
					transition-transform duration-200 lg:translate-x-0`,
					open ? "translate-x-0" : "-translate-x-full"
				)}
				onClick={(e) => {
					e.preventDefault();
					onClose();
				}}>
				{children}
			</aside>
			{open && (
				<div
					className={fnCss.concat(
						"fixed lg:hidden top-0 left-0",
						"w-screen h-full min-h-screen",
						"transition-opacity duration-300",
						open ? "backdrop-blur-sm" : "opacity-0 pointer-events-none"
					)}
					onClick={onClose}
				/>
			)}
		</>
	);
}
