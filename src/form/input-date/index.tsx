"use client";
import {DateTime} from "luxon";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {Calendar, ModalCallback} from "../..";

interface Props {
	className?: string;
	label?: ReactNode;
	displayFormat?: string;
	valueFormat?: string;
	name?: string;
	defaultValue?: string;
}

export default function ({
	displayFormat = "yyyy-MM-dd",
	valueFormat = "yyyy-MM-dd",
	defaultValue = new Date().toISOString(),
	className,
	name,
	label,
}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(DateTime.fromISO(defaultValue).toJSDate());
	return (
		<>
			<div className={fnCss.concat(className)}>
				{label && <div className="label">{label}</div>}
				<div className="flex">
					<div
						className="input field flex items-center grow mr-3 cursor-default hover:underline"
						onClick={() => setOpen(true)}>
						{DateTime.fromJSDate(date).toFormat(displayFormat)}
					</div>
					<input
						name={name}
						hidden
						type="text"
						value={DateTime.fromJSDate(date).toFormat(valueFormat)}
						onChange={() => {}}
					/>
				</div>
			</div>

			<ModalCallback
				disableBackdrop
				disableCloseButton
				open={open}
				onClose={() => setOpen(false)}>
				{(close) => (
					<Calendar
						value={date}
						onChange={(date) => {
							setDate(date);
							close();
						}}
					/>
				)}
			</ModalCallback>
		</>
	);
}
