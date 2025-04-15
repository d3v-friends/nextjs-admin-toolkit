import { Props as ButtonProps } from "../../widget/button/index";
import { ReactNode } from "react";
interface Props {
    className?: string;
    label?: ReactNode;
    displayFormat?: string;
    valueFormat?: string;
    buttonProps?: ButtonProps;
    name: string;
    defaultValue?: string;
}
export default function ({ displayFormat, valueFormat, defaultValue, className, name, label, buttonProps, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
