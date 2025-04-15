"use client";
import {Calendar, Panel, Title} from "@root";
import {NextPageProps} from "nextjs-tools";
import React from "react";

export default function ({}: NextPageProps) {
	return (
		<Panel>
			<Title>캘린더</Title>
			<Calendar />
		</Panel>
	);
}
