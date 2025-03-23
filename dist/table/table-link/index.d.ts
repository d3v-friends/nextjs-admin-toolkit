import { ReactNode } from "react";
import { TableCol } from "../..";
interface Props<T> {
    className?: string;
    empty?: ReactNode;
    linker: (row: T) => string;
    cols: TableCol<T>[];
    list: T[];
}
export default function <T>({ className, cols, list, linker, empty }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
