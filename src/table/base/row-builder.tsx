import React from "react";
import {TableCol} from "../..";

interface Props<T> {
	cols: TableCol<T>[];
	value: T;
}

export default function <T>({cols, value}: Readonly<Props<T>>) {
	return cols.map((v, key) => (
		<td
			key={key}
			className={v.cellClassName}>
			{v.parser(value, key)}
		</td>
	));
}
