import { ReactNode } from "react";
export interface Props {
    iconSrc?: string;
    className?: string;
    children: number | string | ReactNode;
    align?: "justify-center" | "justify-start" | "justify-end";
    copy?: boolean;
    ellipsis?: boolean;
    length?: number;
}
export default function ({ iconSrc, className, children, align, copy, ellipsis, length }: Props): import("react/jsx-runtime").JSX.Element | null;
