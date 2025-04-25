"use client";
import {fnCss, HTMLInputModeAttribute} from "nextjs-tools";
import React, {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";

type Props<T> = {
	label?: ReactNode;
	className?: string;
	hidden?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	defaultValue?: string;
	type?: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: HTMLInputModeAttribute;
	regexp?: string;
	invalidMessage?: string;
	readOnly?: boolean;
	value?: T;
	// todo 빈값일 때 처리하는 기능 추가하기
	// emptyValue?: boolean;
};

export default function <T>({
	label,
	className,
	hidden,
	children,
	disabled,
	required,
	name,
	defaultValue,
	type,
	autoComplete,
	inputMode,
	regexp,
	invalidMessage,
	readOnly,
}: Props<T>) {
	const [value, setValue] = useState(defaultValue || "");
	const isValid = new RegExp(regexp || "").test(`${value || ""}`);
	const errMsg = value && !isValid ? invalidMessage || "" : "";

	useEffect(() => {
		setValue(defaultValue || "");
	}, [defaultValue]);

	return (
		<div className={fnCss.concat(className, hidden ? "hidden" : "")}>
			{label && (
				<div className="label">
					{label}
					{errMsg && <span className="text-(--danger) ml-1">({errMsg})</span>}
				</div>
			)}

			<div className="flex items-center">
				<input
					{...{disabled, required, name, type, autoComplete, inputMode, readOnly}}
					className={fnCss.concat(
						readOnly ? "readonly cursor-not-allowed" : "tag",
						errMsg ? "wrong" : "",
						"input grow"
					)}
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				{children && <div className={"ml-3"}>{children}</div>}
			</div>
		</div>
	);
}
