"use client";
import {InputDate, Panel, Title} from "@root";
import {NextPageProps} from "nextjs-tools";
import React, {useState} from "react";

export default function ({}: NextPageProps) {
	const [date, setDate] = useState(new Date());
	return (
		<Panel>
			<Title>Input</Title>
			<InputDate
				label="날짜"
				value={date}
				onChange={(v) => setDate(v)}
			/>
		</Panel>
	);
}
