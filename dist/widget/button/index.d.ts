import { MouseEventHandler, ReactNode } from "react";
import { ColorStyle } from "../..";
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
export default function ({ type, children, iconSrc, buttonColor, buttonStyle, buttonCorner, buttonAlign, buttonSize, className, disabled, onClick, }: Readonly<Props & {
    disabled?: boolean;
}>): import("react/jsx-runtime").JSX.Element;
