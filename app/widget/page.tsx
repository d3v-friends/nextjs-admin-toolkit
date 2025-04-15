"use client";
import {Calendar, Panel, Title} from "@root";
import {NextPageProps} from "nextjs-tools";
import React, {useState} from "react";

export default function ({}: NextPageProps) {
	const [date, setDate] = useState(new Date());
	return (
		<Panel>
			<Title>캘린더</Title>
			<Calendar
				value={date}
				onChange={(v) => setDate(v)}
			/>
		</Panel>
	);
}
