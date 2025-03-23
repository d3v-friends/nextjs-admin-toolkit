"use server";
import {fnAction} from "nextjs-tools";
import actionForm from "./form";
import {cookies} from "next/headers";
import {THEME_KEY, toggle, validate} from "../fn";

export default async function (_: any, form: FormData) {
	return fnAction.new(form, actionForm, async () => {
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
