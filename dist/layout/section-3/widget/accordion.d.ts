import { ReactNode } from "react";
type AsideMenu = Pick<MenuProps, "title" | "collapsed"> & {
    submenus: SubmenuProps[];
};
export interface Props {
    header: HeaderProps;
    asideMenus: AsideMenu[];
}
export default function ({ header, asideMenus }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
interface HeaderProps {
    iconSrc?: string;
    children?: ReactNode;
    href?: string;
}
export interface MenuProps {
    title?: ReactNode;
    children?: ReactNode;
    collapsed?: boolean;
}
interface SubmenuProps {
    iconSrc?: string;
    title?: ReactNode;
    href: string;
}
export {};
