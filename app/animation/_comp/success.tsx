"use client";

import {useState} from "react";
import Animation from "../../../src/asset/animation";
import {Button} from "@root";

export default function () {
	const [loop, setLoop] = useState(false);

	return (
		<>
			<Animation.Success
				loop={loop}
				className={"mb-10"}
			/>
			<Button onClick={() => setLoop(!loop)}>{loop ? "Loop : Check" : "Loop : Uncheck"}</Button>
		</>
	);
}
