import { ActionState } from "nextjs-tools";
export default function Component({ state, printer, className, }: {
    state: ActionState<unknown, unknown>;
    printer?: Record<string, string>;
    className?: string;
}): import("react/jsx-runtime").JSX.Element | null;
