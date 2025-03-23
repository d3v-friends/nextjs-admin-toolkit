import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    href: string;
}
export default function ({ children, href }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
