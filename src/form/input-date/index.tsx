"use client";
import {Button, Calendar, ModalCallback} from "@root";
import {Props as ButtonProps} from "@root/widget/button/index";
import {DateTime} from "luxon";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useState} from "react";

interface Props {
	className?: string;
	label?: ReactNode;
	displayFormat?: string;
	valueFormat?: string;
	buttonProps?: ButtonProps;
	name: string;
	defaultValue?: string;
}

export default function ({
	displayFormat = "yyyy-MM-dd",
	valueFormat = "yyyy-MM-dd",
	defaultValue = new Date().toISOString(),
	className,
	name,
	label,
	buttonProps,
}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState(DateTime.fromISO(defaultValue).toJSDate());
	return (
		<>
			<div className={fnCss.concat(className)}>
				{label && <div className="label">{label}</div>}
				<div className="flex">
					<div className="input field flex items-center grow mr-3">
						{DateTime.fromJSDate(date).toFormat(displayFormat)}
					</div>
					<input
						name={name}
						hidden
						type="text"
						value={DateTime.fromJSDate(date).toFormat(valueFormat)}
						onChange={() => {}}
					/>
					<Button
						{...buttonProps}
						onClick={() => setOpen(true)}>
						{buttonProps?.children || "선택"}
					</Button>
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
