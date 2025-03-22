"use client";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode} from "react";
import {Tooltip} from "@root";

export interface Props {
	iconSrc?: string;
	className?: string;
	children: number | string | ReactNode;
	align?: "justify-center" | "justify-start" | "justify-end";
	copy?: boolean;
	ellipsis?: boolean;
	length?: number;
}

// todo ellipsis 되었을때 전체 내용 툴팁으로 보여주는 기능 추가하기
export default function ({iconSrc, className, children, align, copy, ellipsis, length}: Props) {
	if (!children) return null;
	align = align || "justify-center";
	copy = copy || false;
	ellipsis = ellipsis || false;
	length = length || 15;

	let value = children;
	if (typeof value === "string" && ellipsis) {
		value = length < value.length ? `${value.slice(0, length)}...` : value;
	}

	const onCopy: MouseEventHandler<HTMLDivElement> = (e) => {
		if (!copy) return;
		e.stopPropagation();
		switch (typeof children) {
			case "string":
				window.navigator.clipboard.writeText(children).catch();
				break;
			case "number":
			case "bigint":
				window.navigator.clipboard.writeText(`${children}`).catch();
				break;
		}
	};

	return (
		<span className={fnCss.concat("inline-flex items-center mr-3", "value", align, className)}>
			{iconSrc && (
				<Image
					className={fnCss.concat("mr-2 pb-[2px]", "primary")}
					width={16}
					height={16}
					src={iconSrc}
					alt="icon"
					priority={true}
				/>
			)}
			<div
				className={fnCss.concat(copy && "value-copy")}
				onClick={onCopy}>
				{ellipsis ? <Tooltip text={value}>{value}</Tooltip> : value}
			</div>
		</span>
	);
}
