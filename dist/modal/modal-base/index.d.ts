import { Props as BaseProps } from "../modal-backdrop";
type Props = {
    disableCloseButton?: boolean;
} & BaseProps;
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
