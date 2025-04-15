import {Viewport} from "next";
import React, {ReactNode} from "react";
import "../../asset/style/index.scss";

interface Props {
	children?: ReactNode;
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: Readonly<Props>) {
	return <>{children}</>;
}
