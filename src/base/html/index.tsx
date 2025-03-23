import {Viewport} from "next";
import React, {ReactNode} from "react";
import {ScssProvider} from "../..";

interface Props {
	lang?: string;
	children?: ReactNode;
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default function ({children, lang}: Readonly<Props>) {
	return (
		<ScssProvider>
			<html lang={lang || "en"}>
				<body className="text-12 lg:text-16 bg-(--color-background-body)">{children}</body>
			</html>
		</ScssProvider>
	);
}
