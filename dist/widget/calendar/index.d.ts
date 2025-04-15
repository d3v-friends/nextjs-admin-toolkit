import "../../../asset/style/react-calendar.css";
interface Props {
    value: Date;
    onChange: (value: Date) => void;
}
export default function ({ value, onChange }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
