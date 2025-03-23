import { ReactNode } from "react";
type Props = {
    right?: ReactNode | ReactNode[];
    children?: ReactNode;
    className?: string;
};
export default function ({ children, right, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
