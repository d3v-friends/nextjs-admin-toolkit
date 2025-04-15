import { ReactNode } from "react";
import { Props as BaseProps } from "../modal-backdrop";
interface Props extends Pick<BaseProps, "disableBackdrop" | "disableEscapeKey" | "open" | "onClose"> {
    disableCloseButton?: boolean;
    children: (close: () => void) => ReactNode;
}
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
