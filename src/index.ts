import {ReactNode} from "react";

export * from "./action";
export * from "./base";
export * from "./form";
export * from "./layout";
export * from "./modal";
export * from "./pager";
export * from "./table";
export * from "./value";
export * from "./widget";
export * from "./animation";

export type ColorStyle =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "light"
	| "dark"
	| "pink"
	| "purple"
	| "blue";

// table
export type TableCol<T> = {
	name: ReactNode;
	parser: (v: T, i: number) => ReactNode;
	colClassName?: string;
	headerClassName?: string;
	cellClassName?: string;
};

export type VoidFunction = () => void;
