"use client";
import React, {ReactNode, useEffect, useState} from "react";
import ServerAction from "./server-action";
import Form from "./form";
import {fnAction, Nullable} from "nextjs-tools";
import {useRouter} from "next/navigation";
import {expect, Theme} from "../fn";

interface Props {
	children?: (props: ChildrenPros) => ReactNode;
}

interface ChildrenPros {
	toggle: () => void;
	theme: Theme;
}

export default function ({children}: Readonly<Props>) {
	const [time, setTime] = useState(0);
	const {state, action} = fnAction.use(ServerAction, Form);
	const [form, setForm] = useState<Nullable<HTMLFormElement>>();
	const [theme, setTheme] = useState<Nullable<Theme>>();
	const router = useRouter();
	
	useEffect(() => {
		if (!state.response) return;
		if (state.response.time === time) return;
		setTime(state.response.time);

		if (state.response.value.reload) {
			router.refresh();
		}
		setTheme(state.response.value.theme);
	}, [state.response]);

	useEffect(() => {
		setTheme(expect(document.documentElement.classList.values().toArray()));
	}, []);

	if (!children) return null;
	if (!theme) return null;

	return (
		<>
			<form
				action={action}
				ref={setForm}
			/>

			{form &&
				children({
					toggle: () => {
						form.requestSubmit();
					},
					theme,
				})}
		</>
	);
}
