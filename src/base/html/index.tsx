"use server";
import React, {ReactNode} from "react";
import {ScssProvider} from "../..";
import {cookies} from "next/headers";
import {validate} from "../theme/fn";

interface Props {
	lang?: string;
	children?: ReactNode;
}

export default async function ({children, lang}: Readonly<Props>) {
	const c = await cookies();
	const theme = validate(c.get("theme")?.value || "light");

	return (
		<ScssProvider>
			<html
				lang={lang || "en"}
				className={theme}>
				<body className="text-12 lg:text-16 bg-(--color-background-body)">{children}</body>
			</html>
		</ScssProvider>
	);
}
