import { Viewport } from "next";
import { ReactNode } from "react";
interface Props {
    lang?: string;
    children?: ReactNode;
}
export declare const viewport: Viewport;
export default function ({ children, lang }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
