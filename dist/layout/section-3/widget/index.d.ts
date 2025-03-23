import { ReactNode } from "react";
import { Props as AccordionProps } from "./accordion";
export interface Props extends AccordionProps {
    top?: ReactNode;
}
export default function ({ header, asideMenus, top }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
