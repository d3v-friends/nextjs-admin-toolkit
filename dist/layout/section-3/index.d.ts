import { ReactNode } from "react";
import { Props as WidgetProps } from "./widget";
interface Props extends WidgetProps {
    children?: ReactNode;
}
export default function ({ children, header, asideMenus, top }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
