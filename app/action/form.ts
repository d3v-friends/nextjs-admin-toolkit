import {fnServerAction} from "nextjs-tools";

export default fnServerAction.forms.createForm({
	username: fnServerAction.inputs.username({}),
	password: fnServerAction.inputs.password({}),
	opts: fnServerAction.inputs.strings({
		defaultValue: "A,B",
		regexp: "^A|B|C$",
	}),
});
