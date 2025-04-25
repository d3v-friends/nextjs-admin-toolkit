"use server";
import {cookies} from "next/headers";
import {fnServerAction} from "nextjs-tools";
import {THEME_KEY, toggle, validate} from "../fn";
import actionForm from "./form";

export default async function (_: any, form: FormData) {
	return fnServerAction.parser(form, actionForm, async () => {
		const c = await cookies();
		const prev = validate(c.get(THEME_KEY)?.value || "light");
		const next = toggle(prev);

		if (prev !== next) {
			c.set(THEME_KEY, next);
		}

		return {
			time: new Date().getTime(),
			value: {
				reload: prev !== next,
				theme: next,
			},
		};
	});
}
