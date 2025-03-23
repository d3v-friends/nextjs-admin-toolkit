"use client";

import {AnimSuccess, Button} from "@root";
import {useState} from "react";

export default function () {
	const [loop, setLoop] = useState(false);

	return (
		<>
			<AnimSuccess
				loop={loop}
				className={"mb-10"}
			/>
			<Button onClick={() => setLoop(!loop)}>{loop ? "Loop : Check" : "Loop : Uncheck"}</Button>
		</>
	);
}
