"use server";
import {fnServerAction} from "nextjs-tools";
import actionForm from "./form";

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function (_: any, form: FormData) {
	return fnServerAction.parser(form, actionForm, async ({username, password}) => {
		await delay(1000);
		return {
			time: 123,
			value: {
				username,
				password,
			},
			other: {
				message: "good",
			},
		};
	});
}
