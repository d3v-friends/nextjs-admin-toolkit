import { ButtonStyles } from "../../button/types";
import { MouseEventHandler, ReactNode } from "react";
type Props = {
    icon?: string;
    type?: "submit" | "reset" | "button";
    className?: string;
    children?: ReactNode;
    style?: ButtonStyles;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function ({ icon, children, className, type, style, disabled, onClick }: Props): import("react/jsx-runtime").JSX.Element;
export {};
