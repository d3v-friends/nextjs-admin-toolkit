import { ReactNode } from "react";
export type ModalBackdropProps = {
    children?: ReactNode;
    disableEscapeKey?: boolean;
    disableBackdrop?: boolean;
    open: boolean;
    onClose: () => void;
};
declare function Component({ open, children, onClose, disableEscapeKey, disableBackdrop }: ModalBackdropProps): import("react/jsx-runtime").JSX.Element | null;
declare namespace Component {
    var __isStatic: boolean;
}
export default Component;
