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
				router.push(href);
			}}>
			{children}
		</tr>
	);
}
