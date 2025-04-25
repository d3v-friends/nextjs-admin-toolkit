import { ActionState } from "nextjs-tools";
import { ReactNode } from "react";
interface Props<T> {
    children?: (onClose: () => void) => ReactNode;
    state?: ActionState<unknown, unknown>;
}
export default function <T>({ state, children }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element | null;
export {};
