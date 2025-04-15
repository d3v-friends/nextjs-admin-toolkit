"use client";
import React from "react";
import Calendar from "react-calendar";
import "../../../asset/style/react-calendar.css";

interface Props {
	value: Date;
	onChange: (value: Date) => void;
}

export default function ({value, onChange}: Readonly<Props>) {
	return (
		<>
			<Calendar
				locale={"ko-kr"}
				value={value}
				onChange={(value) => {
					if (value instanceof Date) {
						onChange(value);
					}
				}}
			/>
		</>
	);
}
