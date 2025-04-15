"use client";
import {InputDate, Panel, Title} from "@root";
import {NextPageProps} from "nextjs-tools";
import React from "react";

export default function ({}: NextPageProps) {
	return (
		<Panel>
			<Title>Input</Title>
			<InputDate
				label="날짜"
				name={"date"}
			/>
		</Panel>
	);
}
