import { TableCol } from "../..";
interface Props<T> {
    cols: TableCol<T>[];
    value: T;
}
export default function <T>({ cols, value }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element[];
export {};
