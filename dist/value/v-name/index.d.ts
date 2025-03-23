import { Props as BaseProps } from "../v-base";
type Props = Pick<BaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;
export default function (props: Props): import("react/jsx-runtime").JSX.Element;
export {};
