"use client";

import {ReactNode, useState} from "react";
import {fnCss} from "nextjs-tools";

type TooltipPosition =
	| "top-left"
	| "top-center"
	| "top-right"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right"
	| "left"
	| "right";

type Props = {
	children?: ReactNode;
	text?: ReactNode;
	position?: TooltipPosition;
};

export default function ({children, text, position = "bottom-center"}: Props) {
	const [isHovered, setIsHovered] = useState(false);

	const handler = {
		onEnter: () => setIsHovered(true),
		onLeave: () => setIsHovered(false),
	};

	const POSITION_MAP: Record<TooltipPosition, {tooltipPositionClasses: string; overlayStyle: string}> = {
		"bottom-left": {
			tooltipPositionClasses: "top-full left-0 mt-2",
			overlayStyle: "absolute top-full left-0 right-0 h-2",
		},
		"bottom-center": {
			tooltipPositionClasses: "top-full left-1/2 transform -translate-x-1/2 mt-2",
			overlayStyle: "absolute top-full left-0 right-0 h-2",
		},
		"bottom-right": {
			tooltipPositionClasses: "top-full right-0 mt-2",
			overlayStyle: "absolute top-full left-0 right-0 h-2",
		},
		"top-left": {
			tooltipPositionClasses: "bottom-full left-0 mb-2",
			overlayStyle: "absolute bottom-full left-0 right-0 h-2",
		},
		"top-center": {
			tooltipPositionClasses: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
			overlayStyle: "absolute bottom-full left-0 right-0 h-2",
		},
		"top-right": {
			tooltipPositionClasses: "bottom-full right-0 mb-2",
			overlayStyle: "absolute bottom-full left-0 right-0 h-2",
		},
		left: {
			tooltipPositionClasses: "right-full top-1/2 transform -translate-y-1/2 mr-2",
			overlayStyle: "absolute right-full top-0 bottom-0 w-2",
		},
		right: {
			tooltipPositionClasses: "left-full top-1/2 transform -translate-y-1/2 ml-2",
			overlayStyle: "absolute left-full top-0 bottom-0 w-2",
		},
	};

	const {tooltipPositionClasses, overlayStyle} = POSITION_MAP[position];

	return (
		<div className="relative">
			{/* children 영역 */}
			<div
				onMouseEnter={handler.onEnter}
				onMouseLeave={handler.onLeave}>
				{children}
			</div>
			{/* 툴팁 유지용 오버레이 div */}
			{isHovered && (
				<div
					onMouseEnter={handler.onEnter}
					onMouseLeave={handler.onLeave}
					className={fnCss.concat(overlayStyle, `z-10`)}
				/>
			)}
			{/* 툴팁 영역 */}
			<div
				className={fnCss.concat(
					`absolute inline-block z-10 px-2 py-1`,
					`w-auto`,
					`bg-gray-600 text-white text-xs rounded`,
					`transition-opacity duration-300 whitespace-nowrap`,
					tooltipPositionClasses,
					isHovered ? `opacity-100` : `opacity-0`,
					isHovered ? `` : `pointer-events-none`
				)}
				onMouseEnter={handler.onEnter}
				onMouseLeave={handler.onLeave}>
				{text}
			</div>
		</div>
	);
}
