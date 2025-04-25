import { ReactNode } from "react";
import { VoidFunction } from "../..";
interface Props {
    onConfirm: VoidFunction;
    onCancel: VoidFunction;
    children: ReactNode;
    confirm?: ReactNode;
    cancel?: ReactNode;
}
export default function ({ onConfirm, onCancel, children, confirm, cancel }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
