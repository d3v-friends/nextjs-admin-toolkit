import { ReactNode } from "react";
interface Props {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
}
export default function ({ children, open, onClose }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
