import Link from "next/link";
import React from "react";
import Button, {Props as BaseProps} from "../button";

interface Props
	extends Pick<
		BaseProps,
		| "children"
		| "className"
		| "iconSrc"
		| "buttonSize"
		| "buttonColor"
		| "buttonStyle"
		| "buttonCorner"
		| "buttonAlign"
		| "buttonBorder"
	> {
	href: string;
}

export default function (props: Readonly<Props>) {
	return (
		<Link href={props.href}>
			<Button
				type="button"
				{...props}
			/>
		</Link>
	);
}
