import { ReactNode } from "react";
import { TableCol } from "../..";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    cols: TableCol<T>[];
    list: T[];
}
export default function <T>({ className, cols, list, empty }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
