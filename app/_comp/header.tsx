"use client";
import React, {ReactNode} from "react";
import {Button, ThemeToggle} from "@root";

type Props = {
	children?: ReactNode;
};

export default function ({}: Readonly<Props>) {
	return (
		<div>
			<ThemeToggle>{({toggle, theme}) => <Button onClick={toggle}>{theme}</Button>}</ThemeToggle>
		</div>
	);
}
