import { ReactNode } from "react";
import "../../../asset/style/index.scss";
interface Props {
    lang?: string;
    children?: ReactNode;
}
export default function ({ children, lang }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
