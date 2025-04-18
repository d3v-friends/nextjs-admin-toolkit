"use client";
import {useRouter} from "next/navigation";
import React, {ReactNode} from "react";

interface Props {
	children: ReactNode;
	href: string;
}

export default function ({children, href}: Readonly<Props>) {
	const router = useRouter();
	return (
		<tr
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				switch (e.button) {
					case 0:
						// e.button = 0 : left click
						router.push(href);
						return;
					case 1:
						// e.button = 1 : center click
						window.open(href, "_blank");
						return;
				}
			}}>
			{children}
		</tr>
	);
}
