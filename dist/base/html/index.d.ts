import { ReactNode } from "react";
interface Props {
    lang?: string;
    children?: ReactNode;
}
export default function ({ children, lang }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
