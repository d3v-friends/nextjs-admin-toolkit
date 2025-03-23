import { Props as BaseProps } from "../v-base";
type Props = Pick<BaseProps, "className" | "align" | "copy"> & {
    children: string;
    timezone?: string;
    hideTime?: boolean;
    hideDate?: boolean;
    format?: string;
};
export default function ({ className, align, copy, timezone, hideTime, hideDate, format, children }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
