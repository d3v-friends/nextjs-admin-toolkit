"use client";
import {ActionState, fnCss} from "nextjs-tools";
import React from "react";

export default function Component({
	state,
	printer,
	className,
}: {
	state: ActionState<unknown, unknown>;
	printer?: Record<string, string>;
	className?: string;
}) {
	className = className || "";
	printer = printer || {};

	if (!state.err) return null;

	let msg = state.err;
	for (const key in printer) {
		if (msg.includes(key)) {
			msg = printer[key];
		}
	}

	return <p className={fnCss.concat("text-center text-(--danger)", className)}>{msg}</p>;
}
