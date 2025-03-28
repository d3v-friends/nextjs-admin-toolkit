import { ReactNode } from "react";
import { ColorStyle } from "../..";
interface Props {
    label?: ReactNode;
    className?: string;
    defaultValue?: string;
    name: string;
    options: string[];
    printer?: (v: string) => ReactNode;
    buttonColor?: ColorStyle;
    gridClassName?: string;
}
export default function ({ label, name, defaultValue, className, options, printer, buttonColor, gridClassName, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
