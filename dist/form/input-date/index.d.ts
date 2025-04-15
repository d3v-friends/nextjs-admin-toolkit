import { Props as ButtonProps } from "../../widget/button/index";
import { ReactNode } from "react";
interface Props {
    className?: string;
    label?: ReactNode;
    format?: string;
    value: Date;
    onChange: (value: Date) => void;
    buttonProps?: ButtonProps;
}
export default function ({ format, className, label, value, onChange, buttonProps }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
