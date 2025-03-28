"use server";
import {fnAction} from "nextjs-tools";
import actionForm from "./form";

export default async function (_: any, form: FormData) {
	return fnAction.new(form, actionForm, async ({opts}) => {
		console.log(opts);
		return {
			time: new Date().getTime(),
			value: null,
		};
	});
}
