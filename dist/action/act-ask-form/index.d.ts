import { ReactNode } from "react";
interface Props {
    action: (payload: FormData) => void;
    pending: boolean;
    className?: string;
    children?: (onOpen: () => void, onClose: () => void) => ReactNode;
    loadingChildren?: ReactNode;
    ask: (onConfirm: () => void, onCancel: () => void) => ReactNode;
    disableBackdrop?: boolean;
    disableEscapeKey?: boolean;
    disableCloseButton?: boolean;
    disableLoadingView?: boolean;
}
export default function ({ className, children, loadingChildren, pending, action, ask, disableEscapeKey, disableBackdrop, disableCloseButton, disableLoadingView, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element | null;
export {};
