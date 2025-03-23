import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-go";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
interface Props {
    className?: string;
    children?: string;
}
export default function ({ children, className }: Readonly<Props>): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
