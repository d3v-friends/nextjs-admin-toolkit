import {fnInput} from "nextjs-tools";

export default fnInput.field.form({
	opts: fnInput.field.strings({
		defaultValue: "A,B",
		regexp: "^A|B|C$",
	}),
});
