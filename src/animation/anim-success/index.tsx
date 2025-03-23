import {CSSProperties} from "react";
import {ColorStyle, Flat} from "../..";
import Image from "next/image";
import {fnCss} from "nextjs-tools";

type Props = {
	className?: string;
	width?: number;
	height?: number;
	stroke?: number;
	color?: ColorStyle | string;
	loop?: boolean;
};

export default function ({className, width = 120, height = 120, stroke = 6, color = "success", loop = true}: Props) {
	const cx = width / 2;
	const cy = height / 2;
	const r = Math.min(width, height) / 2 - 10;

	const animationCssWrapper = loop ? "draw-svg loop" : "draw-svg";
	const computedColor = getColor(color);

	return (
		<div className={fnCss.concat(animationCssWrapper, className)}>
			<svg
				className={"draw-svg"}
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				style={{"--cx": cx, "--cy": cy, "--r": r} as CSSProperties}>
				<circle
					className={"inner-circle"}
					cx={cx}
					cy={cy}
					r={r}
					fill={computedColor}
					strokeWidth="none"
				/>
				<circle
					className={"outer-circle"}
					cx={cx}
					cy={cy}
					r={r}
					fill={computedColor}
					strokeWidth="none"
				/>
				<circle
					className="draw-circle"
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke={computedColor}
					strokeWidth={stroke}
				/>
				<foreignObject
					x={0}
					y={0}
					width={width}
					height={height}>
					<div className={"check-svg"}>
						<Image
							src={Flat.Check}
							className={"check-svg"}
							width={width}
							height={height}
							alt={"success"}
						/>
					</div>
				</foreignObject>
			</svg>
		</div>
	);
}

const validColorStyle: ColorStyle[] = [
	"primary",
	"secondary",
	"primary",
	"secondary",
	"success",
	"info",
	"warning",
	"danger",
	"light",
	"dark",
	"pink",
	"purple",
	"blue",
];

const getColor = (color: ColorStyle | string): string => {
	if (validColorStyle.includes(color as ColorStyle)) {
		return `var(--${color})`;
	}
	return color;
};
