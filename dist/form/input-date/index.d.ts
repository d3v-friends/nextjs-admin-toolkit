import { ReactNode } from "react";
interface Props {
    className?: string;
    label?: ReactNode;
    displayFormat?: string;
    valueFormat?: string;
    name?: string;
    defaultValue?: string;
}
export default function ({ displayFormat, valueFormat, defaultValue, className, name, label, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
