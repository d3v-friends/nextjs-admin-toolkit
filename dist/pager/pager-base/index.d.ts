import React from "react";
interface Props {
    buttons?: number;
    page: number;
    size: number;
    total: number;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, page: number) => void;
}
export default function ({ buttons, page, size, total, onClick }: Props): import("react/jsx-runtime").JSX.Element;
export {};
