"use client";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useEffect, useState} from "react";
import {Button, ColorStyle} from "../..";

interface Props {
	label?: ReactNode;
	className?: string;
	defaultValue?: string;
	name: string;
	options: string[];
	printer?: (v: string) => ReactNode;
	buttonColor?: ColorStyle;
	gridClassName?: string;
}

export default function ({
	label,
	name,
	defaultValue,
	className,
	options,
	printer = (v: string) => `${v}`,
	buttonColor = "primary",
	gridClassName = "grid-cols-3 gap-2 lg:gap-4",
}: Readonly<Props>) {
	const [value, setValue] = useState(defaultValue || "");

	useEffect(() => {
		setValue(defaultValue || "");
	}, [defaultValue]);

	return (
		<div className={fnCss.concat(className)}>
			{label && <div className="label">{label}</div>}
			<input
				hidden
				required
				name={name}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<div className={fnCss.sum("grid", gridClassName)}>
				{options.map((v, i) => (
					<Button
						buttonColor={buttonColor}
						buttonStyle={has(value, v) ? "filled" : "outlined"}
						key={i}
						onClick={() => {
							const res = has(value, v) ? pop(value, v) : push(value, v);
							setValue(res);
						}}>
						{printer(v)}
					</Button>
				))}
			</div>
		</div>
	);
}

function has(origin: string, value: string): boolean {
	const split = origin.split(",");
	return split.findIndex((v) => v === value) !== -1;
}

function push(origin: string, value: string): string {
	if (has(origin, value)) return origin;

	if (origin === "") return value;

	let split = origin.split(",");
	split.push(value);
	split = split.sort();

	let res = "";
	for (const elem of split) {
		res = `${res},${elem}`;
	}

	return res.slice(1, res.length);
}

function pop(origin: string, value: string): string {
	if (!has(origin, value)) return origin;

	let split = origin.split(",");
	const idx = split.findIndex((v) => v === value);
	split = [...split.slice(0, idx), ...split.slice(idx + 1)];
	split = split.sort();

	let res = "";
	for (const elem of split) {
		res = `${res},${elem}`;
	}
	return res.slice(1, res.length);
}
