import { ReactNode } from "react";
interface Props {
    action: (payload: FormData) => void;
    pending: boolean;
    className?: string;
    children: (props: ChildrenProps) => ReactNode;
    loadingChildren?: ReactNode;
    ask: (props: ConfirmCancelProps) => ReactNode;
    disableBackdrop?: boolean;
    disableEscapeKey?: boolean;
    disableCloseButton?: boolean;
    disableLoadingView?: boolean;
}
interface ConfirmCancelProps {
    confirm: () => void;
    cancel: () => void;
}
interface ChildrenProps {
    open: () => void;
    close: () => void;
}
export default function ({ className, children, loadingChildren, pending, action, ask, disableEscapeKey, disableBackdrop, disableCloseButton, disableLoadingView, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
