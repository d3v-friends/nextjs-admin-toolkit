"use client";
import {Button, InputOptions, Panel, Title} from "@root";
import {fnAction, NextPageProps} from "nextjs-tools";
import React from "react";
import serverAction from "./action";
import form from "./form";

export default function ({}: NextPageProps) {
	const {action, state, pending} = fnAction.use(serverAction, form);
	const {opts} = state.value;
	return (
		<Panel>
			<Title>Form</Title>
			<form
				className="grid grid-cols-1 gap-4"
				action={action}>
				<InputOptions
					{...form.opts}
					options={["A", "B", "C"]}
					label="선택형 옵션(리스트)"
					defaultValue={opts}
				/>
				<Button
					disabled={pending}
					buttonColor="dark"
					buttonStyle="outlined"
					type="submit">
					Ok
				</Button>
			</form>
		</Panel>
	);
}
