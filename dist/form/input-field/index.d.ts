import { ReactNode } from "react";
type Props = {
    label?: ReactNode;
    className?: string;
    children?: ReactNode;
};
export default function ({ label, className, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
