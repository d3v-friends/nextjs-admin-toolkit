"use client";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode} from "react";
import {ColorStyle} from "../..";

export interface Props {
	children?: ReactNode;
	className?: string;
	type?: ButtonType;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	iconSrc?: string;
	buttonSize?: ButtonSize;
	buttonColor?: ColorStyle;
	buttonStyle?: ButtonStyle;
	buttonCorner?: ButtonCorner;
	buttonAlign?: "text-center" | "text-left" | "text-right";
}

export type ButtonStyle = "outlined" | "filled";
export type ButtonCorner = "square" | "round";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "submit" | "reset" | "button";

export default function ({
	type = "button",
	children,
	iconSrc,
	buttonColor = "primary",
	buttonStyle = "filled",
	buttonCorner = "square",
	buttonAlign = "text-center",
	buttonSize = "md",
	className = "",
	disabled,
	onClick,
}: Readonly<Props & {disabled?: boolean}>) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={fnCss.sum(
				"button",
				buttonStyle,
				buttonColor,
				buttonCorner,
				buttonSize,
				className,
				disabled ? "disabled" : ""
			)}>
			{/* todo item-baseline 으로하면 아이콘 없는 버튼의 위치와 똑같아 지는데 items-center 로 하면 높이 차이가 나게 됨 이유 찾아보기*/}
			{/* img 의 사이즈의 좌표값이 불명확*/}
			<div className="flex items-baseline">
				{iconSrc && (
					<Image
						className={fnCss.sum(buttonStyle === "filled" ? "opposite" : "", buttonColor, "mr-3")}
						width={20}
						height={20}
						src={iconSrc}
						alt="button"
					/>
				)}
				<div className={fnCss.sum("grow", buttonAlign, buttonColor)}>{children}</div>
			</div>
		</button>
	);
}
