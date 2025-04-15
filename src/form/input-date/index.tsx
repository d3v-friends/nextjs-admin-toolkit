"use client";
import {Button, Calendar, ModalCallback} from "@root";
import {Props as ButtonProps} from "@root/widget/button/index";
import {DateTime} from "luxon";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useState} from "react";

interface Props {
	className?: string;
	label?: ReactNode;
	format?: string;
	value: Date;
	onChange: (value: Date) => void;
	buttonProps?: ButtonProps;
}

export default function ({format = "yyyy-MM-dd", className, label, value, onChange, buttonProps}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className={fnCss.concat(className)}>
				{label && <div className="label">{label}</div>}

				<div className="input field flex items-center">
					<div className="grow mr-3">{value ? DateTime.fromJSDate(value).toFormat(format) : ""}</div>
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
						value={value}
						onChange={(date) => {
							onChange(date);
							close();
						}}
					/>
				)}
			</ModalCallback>
		</>
	);
}
