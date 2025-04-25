"use client";
import {ActionState} from "nextjs-tools";
import React, {ReactNode, useEffect, useState} from "react";
import {ModalBase} from "../..";

interface Props<T> {
	children?: (onClose: () => void) => ReactNode;
	state?: ActionState<unknown, unknown>;
}

export default function <T>({state, children}: Readonly<Props<T>>) {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		if (!state) return;
		if (time === state.time) return;

		setOpen(true);
		setTime(state.time);
	}, [state]);

	if (!state) return null;
	if (state.err) return null;
	if (!children) return null;

	return (
		<ModalBase
			disableBackdrop
			disableCloseButton
			open={open}
			onClose={() => setOpen(false)}>
			{children(() => setOpen(false))}
		</ModalBase>
	);
}
