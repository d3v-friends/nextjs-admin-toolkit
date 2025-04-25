"use server";
import {cookies} from "next/headers";
import React, {ReactNode} from "react";
import {validate} from "../theme/fn";
import "../../../asset/style/index.scss";

interface Props {
	lang?: string;
	children?: ReactNode;
}

export default async function ({children, lang}: Readonly<Props>) {
	const c = await cookies();
	const theme = validate(c.get("theme")?.value || "light");

	return (
		<html
			lang={lang || "en"}
			className={theme}>
			<body className="text-12 lg:text-16 bg-(--color-background-body)">{children}</body>
		</html>
	);
}
