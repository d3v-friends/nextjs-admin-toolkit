import { Props as BaseProps } from "../button";
interface Props extends Pick<BaseProps, "children" | "className" | "iconSrc" | "buttonSize" | "buttonColor" | "buttonStyle" | "buttonCorner" | "buttonAlign"> {
    href: string;
}
export default function (props: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
