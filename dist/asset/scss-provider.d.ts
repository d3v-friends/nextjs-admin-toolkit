import { ReactNode } from "react";
import "../../asset/style/index.scss";
interface Props {
    children?: ReactNode;
}
export default function ({ children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
