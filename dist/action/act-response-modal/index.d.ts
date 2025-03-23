import { State } from "nextjs-tools";
import { ReactNode } from "react";
interface Props<T> {
    children?: (props: ChildrenProps) => ReactNode;
    state?: State<unknown, ActionStateDone<T>>;
}
interface ChildrenProps {
    close: () => void;
}
export type ActionStateDone<T> = {
    time: number;
    value: T;
};
export default function <T>({ state, children }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element | null;
export {};
